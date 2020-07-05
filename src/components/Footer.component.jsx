import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer className="mainFooter">
      <div className="middle-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  className="img-fluid"
                  style={{ width: "25px", margin: "0 5px 5px 0" }}
                />
                <span>Egypt Guide</span>
              </h4>
              <p>
                We specialize in guiding you to the tourist places in our
                country and trying to further our development and we are happy
                to serve you.
              </p>
            </div>
            <div className="col-md-3">
              <h4>Navigation</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contacts">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5">
              <h4>Contacts</h4>
              <ul className="list-unstyled">
                <li>
                  <p>
                    Address:{" "}
                    <span style={{ color: "#fff" }}>
                      Benha, Qalubiya Cairo Egypt
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Phones:{" "}
                    <span style={{ color: "var(--mainBlue)" }}>
                      +20 1002558326
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Email:{" "}
                    <span style={{ color: "var(--mainBlue)" }}>
                      Ben10a2992@gmail.com
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Egypt Guide by{" "}
              <span style={{ color: "var(--mainBlue)", cursor: "pointer" }}>
                Elsoltan
              </span>{" "}
              - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  @media (max-width: 767px) {
    text-align: center;
  }

  .middle-footer {
    background-color: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--mainLightGrey);

    &:hover {
      color: var(--mainGrey);
    }
  }

  ul li p {
    color: var(--mainLightGrey);
  }
`;
