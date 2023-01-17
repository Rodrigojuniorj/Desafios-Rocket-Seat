import logoImg from "../assets/logo.svg";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

import { Header as HeaderContainer } from "../styles/components/header";
import { Handbag } from "phosphor-react";
import { ModalCart } from "./ModalCart";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Dialog.Root>
        <Image src={logoImg} alt="" />
        <Dialog.Trigger asChild>
          <button type="button">
            <Handbag weight="bold" size={24} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </button>
        </Dialog.Trigger>
        
        <ModalCart />
      </Dialog.Root>
    </HeaderContainer>
  );
}
