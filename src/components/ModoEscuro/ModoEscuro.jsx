import { useState, useEffect } from "react";
import "./ModoEscuro.css";

function ModoEscuro() {
  const [modoEscuro, setModoEscuro] = useState(
    () => JSON.parse(localStorage.getItem("modoEscuro")) || false
  );

  useEffect(() => {
    localStorage.setItem("modoEscuro", modoEscuro);

    if (modoEscuro) {
      document.body.classList.add("modo-escuro");
    } else {
      document.body.classList.remove("modo-escuro");
    }
  }, [modoEscuro]);

  return (
    <button
      className="btn-modo-escuro"
      onClick={() => {
        setModoEscuro(!modoEscuro);
      }}
    >
      {modoEscuro ? (
        <i class="material-icons" title="Modo claro">
          light_mode
        </i>
      ) : (
        <i class="material-icons" title="Modo escuro">
          dark_mode
        </i>
      )}
    </button>
  );
}

export default ModoEscuro;
