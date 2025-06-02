import CtaButton from "../../components/CtaButton/CtaButton";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section class="hero" id="hero">
        <div class="hero-content">
          <h1>Jean de Oliveira Lopes</h1>
          <h2>Nutricionista Clínico</h2>
          <p>
            Minha paixão? Alimentação! Meu propósito? Transformar vidas!
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
