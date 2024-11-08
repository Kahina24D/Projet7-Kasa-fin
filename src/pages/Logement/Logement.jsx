import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Starrating from "../../components/Carrossal/Starrating";
import "./logement.scss";
import Caroossale from "../../components/Carrossal/Caroossale";
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import victorDown from "../../pages/Logement/victorDown/Victor-down.png";
import victorUp from "../../pages/Logement/victorUp/victor-up.png";
import Logohost from "../../assets/Logohost/Host.png";
import Footer from "../../components/Footer/Footer";
function Logement() {
  const [isExpended, setExpended] = useState(false);
  const [isExpended1, setExpended1] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((l) => l.id === id);
  if (!logement) {
    navigate("/error");
    return null;
  }

  const toggleDescreption = () => {
    setExpended(!isExpended);
  };
  const toggleEquipement = () => {
    setExpended1(!isExpended1);
  };
  return (
    
 
    <div className="style-logement ">
           

<div className="container-logement">

<Header />
<Caroossale logement={logement} style={{ margin: '30px' }} />
  <div className="item1-logement">
  <div className="logementtitle">
   <h1>{logement.title}</h1>

  </div>
  
  <div className="host-logement">
   <p>{logement.host.name}</p>
    <img src={Logohost} alt="logo-host" />
    </div>
  </div>
  <div className="item-logement">
  <p>{logement.location}</p>
    </div>
  <div className="item2-logement">

            <div className="tage-logement">
              {logement.tags && logement.tags.length > 0 ? (
                logement.tags.map((tage, index) => (
                  <div className="tage" key={index}>
                    <p className="text-tag">{tage}</p>
                  </div>
                ))
              ) : (
                <p>Aucun tag disponible</p>
              )}
            </div>
            <div className="etoile-logement">
             <div><Starrating /></div> 
             <div className="host-logement-hidden">
               <p>{logement.host.name}</p>
             <img src={Logohost} alt="logo-host" />
               </div>


            </div>
</div>
   <div className="item3-logement">
        <div className="descreption-logement">
              <div className="descreption-header" onClick={toggleDescreption}>
                <h1>Description</h1>
                <img
                  src={isExpended ? victorUp : victorDown}
                  alt="Toggle arrow"
                  style={{
                    transform: isExpended ? "rotate(180deg)" : "rotate(180deg)",
                  }}
                  className="toggle-arrow"
                />
              </div>
              {isExpended && (
                <p
                  className={`text-descreption ${isExpended ? "expanded" : ""}`}
                >
                  {logement.description}
                </p>
              )}
            </div>

            <div className="equipement-logement">
              <div className="equipement-header" onClick={toggleEquipement}>
                <h1>Equipements</h1>
                <img
                  src={isExpended1 ? victorUp : victorDown}
                  alt="Toggle arrow"
                  style={{
                    transform: isExpended1
                      ? "rotate(180deg)"
                      : "rotate(180deg)",
                  }}
                  className="toggle-arrow"
                />
              </div>
              {isExpended1 && (
                <div className="liste-equipement">
                  {logement.equipments && logement.equipments.length > 0 ? (
                    logement.equipments.map((equipement, index) => (
                      <p className="text-equipement" key={index}>{equipement}</p>
                    ))
                  ) : (
                    <p>Aucun équipement disponible</p>
                  )}
                </div>
              )}
            </div>
</div>

</div>

      <Footer/>
    </div>
    
  );
}

export default Logement;
