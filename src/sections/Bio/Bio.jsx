import "./Bio.css";
import CtaButton from "../../components/CtaButton/CtaButton";

function Bio() {
  return (
    <>
      <section class="bio" id="bio">
        <div class="bio-image">
          <img src="/jean-bio.png" alt="Jean Lopes Formação" />
        </div>

        <div class="bio-content">
          <h1>Sobre mim</h1>
          <p>
            Sou nutricionista formado pela Unicamp, com foco em nutrição clínica
            voltada ao emagrecimento e à promoção da qualidade de vida. Atendo
            pacientes presencialmente e online, com um cuidado sempre
            personalizado. Durante minha formação, participei do CBCTA e
            desenvolvi pesquisas sobre bebidas vegetais probióticas e compostos
            antioxidantes com grãos germinados.
          </p>
          <p>
            Minha abordagem é humanizada, baseada em ciência e livre de dietas
            restritivas. Acredito que um bom acompanhamento nutricional deve
            respeitar o tempo, as individualidades e os desejos de cada pessoa,
            celebrando cada pequena conquista no caminho para uma vida mais
            saudável.
          </p>
          <p>
            Ofereço diferenciais como planos alimentares não restritivos,
            suporte via WhatsApp e um aplicativo exclusivo para facilitar a
            rotina alimentar dos meus pacientes. Escolhi a nutrição por paixão —
            porque acredito no poder da comida em transformar vidas, conectar
            pessoas e promover bem-estar.
          </p>
          <CtaButton />
        </div>
      </section>
    </>
  );
}

export default Bio;
