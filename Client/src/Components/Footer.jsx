import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#1F2937", color: "white", padding: "20px" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-3 mx-auto">
            <div className="d-flex">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <img src={Logo} className="Logo mt-1" alt="Logo" />
              </Link>
              <h1 className="ms-3">Shopsy</h1>
            </div>
            <hr style={{ width: "80%" }} />
            <p>
              Welcome to Shopsy, your one-stop online shopping destination for
              all your needs. We bring you a world of products from top brands,
              all under one virtual roof.
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12 mt-lg-0 mt-md-0 mt-3 mx-auto">
            <h1>Products</h1>
            <hr style={{ width: "80%" }} />
            <span>Luxury</span>
            <br />
            <span>Sport Wear</span>
            <br />
            <span>Men's Shoes</span>
            <br />
            <span>Women's Shoes</span>
            <br />
            <span>Popular Dress</span>
            <br />
            <span>Gym Accessories</span>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mt-lg-0 mt-md-0 mt-3 mx-auto">
            <h1>Further Info</h1>
            <hr style={{ width: "80%" }} />

            <span>Home</span>
            <br />
            <span>About Us</span>
            <br />
            <span>Shop Location</span>
            <br />
            <span>FAQ's</span>
            <br />
            <span>Contact</span>
          </div>
        </div>
        <div className="col-11 mx-auto mt-5">
          <hr />
        </div>
        <h5 className="text-center">© 2024 Shopsy . ALL RIGHTS RESERVED.</h5>
      </div>
    </>
  );
};

export default Footer;
