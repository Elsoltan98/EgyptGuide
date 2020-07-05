import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55027.12106816144!2d31.153402134971163!3d30.458912523606077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2sBanha%2C%20Qism%20Banha%2C%20Banha%2C%20Al%20Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1593609989374!5m2!1sen!2seg"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowFullScreen
                title="map"
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone"
                  />
                </div>
                <textarea
                  cols="30"
                  rows="3"
                  className="form-control mb-2"
                  placeholder="text me"
                ></textarea>
                <Link to="/" className="btn btn-outline-primary text-uppercase">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                  <i className="fab fa-telegram-plane" aria-hidden="true"></i>
                  &nbsp;send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
