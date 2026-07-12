import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Footer from "@/components/layout/Footer";
import Products from "@/components/sections/Products";
import Leadership from "@/components/sections/Leadership";
import CompanyLogos from "@/components/sections/CompanyLogos";
export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
	  <CompanyLogos />
      <Journey />
	  <Products/>
	  <Leadership />
      <Footer />
    </main>
  );
}