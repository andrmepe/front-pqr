import React from "react";
import { Link } from "react-router-dom";
import pqrimg from "../assets/pqr.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${pqrimg})` }}>
      <div className="headerContainer">
        <h1> PQR SOLUTIONS </h1>
        <p> THE BEST SOLUTIONS TO YOUR PQRS</p>
        <Link to="/solicitudes">
          <button> Haz tu PQR aquí </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;