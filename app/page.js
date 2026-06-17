import Header from "./components/header/header";
import HeroCarousel from "./components/carousel/Herocarousel";
import About from "./components/aboutSection/about";
import Clients from "./components/clients/clients";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroCarousel/>
      <About/>
      Welcome To Matrix Power Homepage
      <Clients/>
      <Footer/>
    </div>
  );
}
