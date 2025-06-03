import "./BtnSubir.css";

function BtnSubir() {
  return (
    <button
      className="btn-subir"
      onClick={() => {
        const header = document.getElementById("header");
        if (header) {
          header.scrollIntoView({ behavior: "smooth" });
        }
      }}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default BtnSubir;
