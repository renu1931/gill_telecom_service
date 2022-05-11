import React from "react";
import gill_telecom_logo from "../images/gill_telecom_logo.png";

function Header() {
  return (
    <>
      {/*navbar  start*/}
      <nav className="navbar navbar-expand-lg navbar-dark " id="navbar">
        <img
          src={gill_telecom_logo}
          alt="gill_telecom__logo"
          id="gill_telecom_logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="navbar_ul">
            <li className="nav-item ">
              <a className="nav-link active" href="/" id="home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="/about" id="home">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/services" id="home">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/clients" id="home">
                Clients
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="/products" id="home">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contact us" id="home">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar complete*/}
    </>
  );
}

export default Header;
