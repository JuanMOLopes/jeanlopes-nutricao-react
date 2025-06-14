import CtaButton from "../../components/CtaButton/CtaButton";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section class="hero" id="hero">
        <div class="hero-content">
          <h1>Jean Lopes</h1>
          <h2>Nutricionista Clínico</h2>
          <p>
            Minha paixão? Alimentação!
          </p>
          <CtaButton/>
        </div>

        <div class="hero-image">
          <img
            src="/jean-hero.png"
            alt="Jean de Oliveira Lopes - Nutricionista"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
