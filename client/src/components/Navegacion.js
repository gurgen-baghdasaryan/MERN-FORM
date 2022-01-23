import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Usuario
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Lista Usuario
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CrearUsuarios">
                Crear Usuario
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
