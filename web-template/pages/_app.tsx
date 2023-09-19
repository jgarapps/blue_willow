import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="body">
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
