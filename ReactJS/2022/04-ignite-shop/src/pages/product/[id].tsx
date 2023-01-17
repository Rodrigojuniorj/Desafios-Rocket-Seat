import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import Head from 'next/head'
import { useCart } from "../../hooks/useCart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { addProductToCart, cart } = useCart();

  
  function handleAddProductToCart() {
    addProductToCart({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      description: product.description,
      defaultPriceId: product.defaultPriceId,
    });
  }

  // um item
  // async function handleBuyProduct() {
  //   try{
  //     setIsCreatingCheckoutSession(true);

  //     const response = await axios.post("/api/checkout", {
  //       priceId: product.defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl;
  //   }catch(err){
  //     // Conectar com uma ferramente de observabilidade (datadog/ Sentry)
  //     setIsCreatingCheckoutSession(false);
  //     alert('Falha ao redirecionar ao checkout!')
  //   }
  // }

  if(!product) {
    return (
      <div>carregando ... </div>
    )
  }   

  const productAlreadyExists = !!cart.find(item => item.id === product.id);

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl}  width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          
          <span>{product.price}</span>
          <p>{product.description}</p>

          { productAlreadyExists ? (

            <button disabled>
              Produto adicionado ao carrinho
            </button>
          ): (
            <button disabled={isCreatingCheckoutSession} onClick={handleAddProductToCart}>
              Adicionar ao carrinho
            </button>
          )}
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

// dizer quais sao os parametros da pagina statica
export const getStaticPaths: GetStaticPaths = async () => {
  // buscar os produtos mais vendidos / mais acessados
  return {
    paths: [
      { params: { id: 'prod_Mg6tIqHMuPepj8' } }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}