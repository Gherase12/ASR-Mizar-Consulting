import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { LeanguageProvider } from "@/context/LeanguageContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LeanguageProvider>
      <div className=' relative mt-16  '>
        <Nav />

        <Component {...pageProps} />
        <Footer />
      </div>
    </LeanguageProvider>
  );
}
