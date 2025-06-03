import "./Card.css";

function Card(props) {
  return (
      <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="card-overlay" />

        <span className="material-icons">{props.icon}</span>

        <p>{props.text}</p>
      </div>
  );
}

export default Card;
