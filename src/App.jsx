import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Cards from "./sections/Cards/Cards";
import Bio from "./sections/Bio/Bio";
import Contato from "./sections/Contato/Contato";
import Footer from "./components/Footer/Footer";

import BtnContato from "./components/BtnContato/BtnContato";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <Bio />
      <Contato />
      <Footer />

      <BtnContato />
    </>
  );
}

export default App;
