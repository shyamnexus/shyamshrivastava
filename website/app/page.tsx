import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Footer from "@/components/layout/Footer";
import Products from "@/components/sections/Products";
import Leadership from "@/components/sections/Leadership";
export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Journey />
	  <Products/>
	  <Leadership />
      <Footer />
    </main>
  );
}