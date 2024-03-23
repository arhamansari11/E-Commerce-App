import React from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const items = [
  {
    label: "My Profile",
    key: "1",
    icon: <UserOutlined />,
    link: "/profile",
  },
  {
    label: "My Orders",
    key: "2",
    icon: <ShoppingCartOutlined />,
    link: "/orders",
  },
];

function Navbar() {
  const menu = (
    <Space direction="vertical">
      {items.map((item) => (
        <Link key={item.key} to={item.link} className="dropdown-link">
          {item.icon} {item.label}
        </Link>
      ))}
    </Space>
  );

  return (
    <div className="col-12">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src={Logo} className="Logo" alt="Logo" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link
                to="/cart"
                className="nav-link mt-2 me-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ShoppingCartOutlined style={{fontSize : "25px"}}/>
              </Link>

              <Space wrap>
                <Dropdown.Button
                  overlay={menu}
                  placement="bottomRight"
                  icon={<UserOutlined />}
                >
                  My Info
                </Dropdown.Button>
              </Space>
              <button className="btn btn-secondary mx-3" type="submit">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </button>
              <button className="btn btn-secondary" type="submit">
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
  );
}

export default Navbar;
