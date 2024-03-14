import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";

function Navbar() {
  return (
    // <div className="container-fluid">
    // <div className="row">
    <div className="col-12">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" style={{ textDecoration: "none", color: "Black" }}>
            <img src={Logo} className="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link
                    to="/orders"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    Orders
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <Link
                    to="/cart "
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    Cart
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "Black" }}
                  >
                    Profile
                  </Link>
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-success me-3" type="submit">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </button>
              <button class="btn btn-success" type="submit">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    // </div>
    // </div>
  );
}

export default Navbar;
