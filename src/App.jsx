import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Footer from "./components/Footer/Footer";

import BtnContato from "./components/BtnContato/BtnContato";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />

      <BtnContato/>
    </>
  );
}

export default App;
