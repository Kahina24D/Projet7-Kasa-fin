// Home.jsx



import "./home.scss";
import "../../components/Cadre/cadre.scss";
import Card from "../../components/Cadre/Card";
import logements from "../../data/logements.json";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Header />
      <Banner  src="banner.png" title={"Chez vous, partout et ailleurs"}/>
      <div className="gallery-container">
        <div className="logements-gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              logement={logement} // Passez l'objet logement ici
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
