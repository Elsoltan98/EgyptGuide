import React from "react";
import Logo from "./../logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link cllinkssnlinkme="nLinkvbLinkr-brLinknd" to="/">
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i
            className="fas fa-bars"
            style={{
              color: "#fff",
            }}
          ></i>
        </span>
      </button>

      <div
        className="collapse navbar-collapse text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link ml-5 text-white text-uppercase" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link ml-5 text-white text-uppercase"
              to="/news"
            >
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link ml-5 text-white text-uppercase"
              to="/contacts"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
