import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import {
  CloseButton,
  Content,
  TitleContent,
  WrapperItens,
  ImageContainer,
  FooterContainer,
} from "../styles/components/modalCart";
import { MoneyToFloat } from "../utils/convertMoney";

export function ModalCart() {
  const { cart, removeProductFromCart } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const total = cart.reduce((acc, product) => {
    const price = MoneyToFloat(product.price);
    return acc + price;
  }, 0);

  async function handleBuyProduct() {
    try{
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cart,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    }catch(err){
      // Conectar com uma ferramente de observabilidade (datadog/ Sentry)
      setIsCreatingCheckoutSession(false);
      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      {/* <Overlay /> */}

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <TitleContent>Sacola de Compras</TitleContent>

        {cart.map((product) => (
          <WrapperItens>
            <ImageContainer>
              <Image src={product.imageUrl} alt="" height={100} width={100} />
            </ImageContainer>
            <div>
              <span>{product.name}</span>
              <strong>{product.price}</strong>
              <button onClick={() => removeProductFromCart(product.id)}>
                Remover
              </button>
            </div>

            <FooterContainer>
              <div>
                <span>Quantidade</span>
                {cart.length > 1 ? (
                  <span>{cart.length} itens</span>
                ) : (
                  <span>{cart.length} item</span>
                )}
              </div>
              <div>
                <strong>Valor total</strong>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </strong>
              </div>
              <button onClick={handleBuyProduct}>Finalizar compra</button>
            </FooterContainer>
          </WrapperItens>
        ))}
      </Content>
    </Dialog.Portal>
  );
}
