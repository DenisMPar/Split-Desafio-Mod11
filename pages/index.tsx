import { AboutUsSection } from "../components/aboutUsSection";
import { ContactSection } from "../components/contactSection";
import { ProductsSection } from "../components/products";
import { HomeSection } from "../components/homeSection";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Split - Materiales de Atado</title>
      </Head>
      <Header />
      <HomeSection />
      <AboutUsSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
