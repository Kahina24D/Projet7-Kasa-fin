import "./error.scss";
import { Link } from "react-router-dom";


function Error() {
  return (
    <div>
 
     <div className="item-error"><img src="404@2x.png" alt="imageerror" /></div> 

   
      
            <Link to="/home" className="link-home">Retourner sur la page d’accueil</Link>
          
 
    </div>
  );
}

export default Error;
