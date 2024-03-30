import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.png";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useSelector } from "react-redux";

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
  const selct = useSelector(state => state);
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
      <nav
        className="navbar navbar-expand-sm "
        style={{ backgroundColor: "#1F2937" }}
      >
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
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-link me-4 position-relative"
                  style={{ textDecoration: "none", color: " white" }}
                >
                  <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                  <span class="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                    {selct}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
            <form className="d-flex me-3" role="search">
              <Space wrap>
                <Dropdown.Button
                  overlay={menu}
                  placement="bottomRight"
                  icon={<UserOutlined />}
                >
                  My Info
                </Dropdown.Button>
              </Space>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
