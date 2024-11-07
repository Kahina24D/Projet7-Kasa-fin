import "./cadre.scss";

import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <div className="logement-item">
      <Link to={"/logement/" + logement.id} className="image-container">
        <img src={logement.cover} alt={logement.title} className="logement" />
        <h2 className="logement-title">{logement.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
