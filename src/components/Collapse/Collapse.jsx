import React, { useState } from "react";
import "./collapse.scss"; // Ajoutez les styles pour le composant
import victorDown from "../../pages/Logement/victorDown/Victor-down.png";
import victorUp from "../../pages/Logement/victorUp/victor-up.png";

function Collapse({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img
          src={isExpanded ? victorUp : victorDown}
          alt="Toggle arrow"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(180deg)",
            transition: "transform 0.3s ease",
          }}
          className="toggle-arrow"
        />
      </div>
      {isExpanded && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
