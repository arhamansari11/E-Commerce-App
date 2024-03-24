import React from "react";
import Logo from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-4 col-md-6 col-sm-8">
        <form>
          <div className="mb-2 text-center">
            <img src={Logo} className="Logo" alt="Logo" />
          </div>
          <div className="mb-4 text-center">
            <h4 style={{ fontWeight: "bold" }}>Login to your Account</h4>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <label className="form-label">Password</label>
            <label className="form-label">
              <Link
                to="/forgotpassword"
                style={{
                  textDecoration: "none",
                  color: "#6366F1",
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </Link>
            </label>
          </div>
          <input type="password" className="form-control" />

          <button
            type="submit"
            className="btn btn-primary my-3 mx-auto d-block"
          >
            Log in
          </button>
          <div className="text-center">
            <label className="form-label ">
              Not a member ?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#6366F1" }}
              >
                Create an Account
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
