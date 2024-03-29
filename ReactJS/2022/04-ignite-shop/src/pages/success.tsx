import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import Head from 'next/head'
import { useCart } from "../hooks/useCart";

interface SuccessProps {
  customerName: string;
  products: [{
    name: string;
    imageUrl: string;
  }]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { resetCart } = useCart();

  resetCart();
  return(
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robot" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <h1>Compra efetuada!</h1>
        
        <div>
          { products.map((product, index) => (
            <ImageContainer key={index}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          )) }
        </div>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} já está a caminho da sua casa. 
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId,{
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;

  const products = session.line_items.data.map((item: any) => {
    return {
      name: item.price.product.name,
      imageUrl: item.price.product.images[0],
    }
  })
  
  return {
    props: {
      customerName,
      products    
    }
  }
}