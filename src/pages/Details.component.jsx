import React, { Component } from "react";
import { InfoConsumer } from "./../context";
import { Link } from "react-router-dom";
import Reviews from "./../components/Review.component";
import styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            headerTitle,
            headerSubTitle,
            headerText,
            title,
            description,
            maps,
            img,
          } = data.detailInfo;
          return (
            <React.Fragment>
              <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* Social icon */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <Link
                        to={{ pathname: "https://www.facebook.com/" }}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </div>
                    <div className="col-2">
                      <Link
                        to={{ pathname: "https://www.twitter.com/" }}
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </div>
                    <div className="col-2">
                      <Link
                        to={{ pathname: "https://www.google.com/" }}
                        target="_blank"
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </div>
                    <div className="col-2">
                      <Link
                        to={{ pathname: "https://www.reddit.com/" }}
                        target="_blank"
                      >
                        <i className="fab fa-reddit"></i>
                      </Link>
                    </div>
                    <div className="col-2">
                      <Link
                        to={{ pathname: "https://www.messenger.com/" }}
                        target="_blank"
                      >
                        <i className="fab fa-facebook-messenger"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              <div className="container">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nav-link active"
                      data-toggle="tab"
                      role="tab"
                    >
                      About Place
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link"
                      data-toggle="tab"
                      role="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link"
                      data-toggle="tab"
                      role="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                <div className="tab-content mb-5">
                  {/* About place tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img src={img} alt="title" className="img-fluid" />
                  </div>
                  {/* reviews tab */}
                  <div id="reviews" className="tab-pane" role="tabpanel">
                    <Reviews />
                  </div>
                  {/* Maps tab */}
                  <div id="map" className="tab-pane" role="tabpanel">
                    <iframe
                      src={maps}
                      title={headerTitle}
                      frameBorder="0"
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameborder: "0",
                        marginTop: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.div`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding: 0 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 767px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
