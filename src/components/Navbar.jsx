import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand fw-bold text-uppercase fst-italic" to="/">
            Chef’s Palette
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search recipes..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          {/* Login/Register Links */}
          <div>
            <Link className="link-light bg-secondary p-2 text-decoration-none" to="/login">
              Login
            </Link>
            <span className="text-light mx-2">/</span>
            <Link className="link-light bg-secondary p-2 text-decoration-none" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
