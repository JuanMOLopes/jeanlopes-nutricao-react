import { useEffect, useState } from "react";
import "./BtnContato.css";

import WhatsappBtn from "/whatsapp-btn.png";

function BtnContato() {
  const [bottomOffset, setBottomOffset] = useState(32);

  useEffect(() => {
    function handleScroll() {
      const footer = document.getElementById("footer");
      const btn = document.querySelector(".btn-contato");
      if (!footer || !btn) return;

      const footerRect = footer.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      // Distância entre o topo do botão e o topo da viewport
      const btnTop = btnRect.top;

      // Distância entre o topo do footer e o topo da viewport
      const footerTop = footerRect.top;

      // Se o botão encostar no footer (ou estiver abaixo)
      if (btnTop + btnRect.height > footerTop) {
        // Quanto precisa subir: distância do botão até o footer + 32px
        const overlap = btnTop + btnRect.height - footerTop;
        setBottomOffset(32 + overlap);
      } else {
        setBottomOffset(32); // posição padrão
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5519991701252&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={WhatsappBtn}
        className="btn-contato"
        alt="whatsapp"
        style={{ bottom: `${bottomOffset}px` }}
      />
    </a>
  );
}

export default BtnContato;
