import "./Header.css";

import Navbar from "../Navbar/Navbar";
import ModoEscuro from "../ModoEscuro/ModoEscuro";

import Logo from "/logo.png";

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div className="logo nome">
          <p>Jean Lopes</p>
          <p className="p-nome">Nutricionista</p>
        </div>
      </div>
      <div className="navbar">
        <Navbar />
        <ModoEscuro />
      </div>
    </header>
  );
}

export default Header;
