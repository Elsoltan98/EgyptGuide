import React, { Component } from "react";

import { Link } from "react-router-dom";
import { InfoConsumer } from "./context";

class Info extends Component {
  render() {
    const {
      id,
      headerTitle,
      headerSubTitle,
      headerText,
      img,
    } = this.props.item;
    return (
      <InfoConsumer>
        {(data) => (
          <div className="col-lg-4 col-md-6 w-auto mx-auto text-center mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} alt={headerTitle} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title text-uppercase">{headerTitle}</h3>
                <h5 className="card-title">{headerSubTitle}</h5>
                <p className="card-text">{headerText}</p>
                <Link
                  to="/details"
                  className="btn btn-outline-primary text-uppercase"
                  onClick={() => data.handleDetail(id)}
                >
                  more info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
export default Info;
