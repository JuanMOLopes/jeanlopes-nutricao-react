import "./Contato.css";

import CtaButton from "../../components/CtaButton/CtaButton";

import Instagram from "/instagram.png";
import Whatsapp from "/whatsapp.png";

function Contato() {
  return (
    <section className="contact" id="contato">
      <div className="contact-info">
        <h2>Contato</h2>
        <p>Livance Campinas</p>
        <p>Av. Orosimbo Maia, 360 - 6º andar - Vila Mariana</p>
        <p>Campinas - SP, 13010-211</p>

        <p>
          Atendo tanto presencialmente quanto online, oferecendo flexibilidade
          para o seu acompanhamento nutricional.
        </p>

        <div className="contact-buttons">
          <CtaButton />
        </div>

        <div className="social-links">
          <a
            href="https://www.instagram.com/nutrijeanlopes?igsh=dGQzMjhoZW00NHc0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5519991701252&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Localização da Clínica Livance Campinas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4970519450614!2d-47.06686748497021!3d-22.906503137030963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf9af5fbe22a45%3A0x576d86b38b88d7ff!2sAv.%20Orosimbo%20Maia%2C%20360%20-%206%C2%BA%20andar%2C%20Campinas%20-%20SP%2C%2013010-211!5e0!3m2!1spt-BR!2sbr!4v1696278075000!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contato;
