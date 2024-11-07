import "./header.scss";
import { Link } from "react-router-dom";
import logoHeader from "../../components/Header/logoHeader/logo-header.png";
function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo" className="logo-header" />

      <nav>
        <ul>
          <li>
            <Link to="/home">Acceuil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
