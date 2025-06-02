import "./Card.css";

function Card(props) {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5519991701252&text&type=phone_number&app_absent=0"
      target="_blank"
    >
      <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="card-overlay" />

        <span className="material-icons">{props.icon}</span>

        <p>{props.text}</p>
      </div>
    </a>
  );
}

export default Card;
