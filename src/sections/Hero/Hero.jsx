import "./Hero.css";
import BtnContato from "../../components/BtnContato/BtnContato";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h1>Bem-vindo ao meu site!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, doloremque, voluptas, quia, ipsa, aspernatur
            necessitatibus, doloremque, voluptas, quia, ipsa, aspernatur
            necessitatibus, doloremque, voluptas, quia, ipsa, aspernatur
            necessitatibus.
          </p>
          <BtnContato />
        </div>
      </section>
    </>
    );
}

export default Hero;