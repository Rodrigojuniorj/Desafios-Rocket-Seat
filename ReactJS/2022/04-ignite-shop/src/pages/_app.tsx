import { AppProps } from "next/app"
import { ToastContainer } from "react-toastify";
import { Header } from "../components/Header";
import { CartContextProvider } from "../context/CartContext";
import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app";
import 'react-toastify/dist/ReactToastify.css'

globalStyles();
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>

      <ToastContainer />
    </CartContextProvider>
  )
}


