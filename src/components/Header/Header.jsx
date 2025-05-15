import "./Header.css";

import Navbar from "../Navbar/Navbar";

import Logo from "/logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
        <div className="logo nome">
          <p>Jean Lopes</p>
          <p className="p-nome">Nutricionista</p>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
