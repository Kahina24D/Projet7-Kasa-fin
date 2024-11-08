import "./error.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Error() {
  return (
    <div>
      <Header />
     <div className="item-error"><img src="404@2x.png" alt="imageerror" /></div> 

   
      
            <Link to="/home" className="link-home">Retourner sur la page d’accueil</Link>
          
      <Footer />
    </div>
  );
}

export default Error;
