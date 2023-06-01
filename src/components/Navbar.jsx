import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar () {
  return (
    <div className="navbar">
      <div className="header">
        <Link to="/"> Home </Link>
        <Link to="/solicitudes"> Haz tu PQR aquí </Link>
        <Link to="/pqrs"> Pqrs </Link>
      </div>
    </div>
  );
}

export default Navbar;