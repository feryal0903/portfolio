import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
      <Link to="/">Accueil</Link>
      <Link to="/apropos">À propos</Link>
      <Link to="/cv">CV</Link>
      <Link to="/projets">Projets</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Header;