import "./BtnContato.css";

import WhatsappBtn from "/whatsapp-btn.png";

function Footer() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5519991701252&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <img src={WhatsappBtn} className="btn-contato" alt="whatsapp" />
    </a>
  );
}

export default Footer;
