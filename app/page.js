
import HeroCarousel from "./components/carousel/Herocarousel";
import About from "./components/aboutSection/about";
import Products from "./components/productSec/product";
import WhyChooseUs from "./components/whyChooseUsSec/whyChooseUs";
import Clients from "./components/clients/clients";



export default function Home() {
  return (
    <div>      
      <HeroCarousel/>
      <About/>
      <Products/>
      <WhyChooseUs/>
      <Clients/>      
    </div>
  );
}
