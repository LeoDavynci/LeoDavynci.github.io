import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Work"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section><Parallax/></section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
