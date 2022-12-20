import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Navigation from "../components/navigation";
import "../styles/globals.css";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} flex justify-between flex-col min-h-screen`}>
      <div>
        <Navigation />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
