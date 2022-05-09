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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/services"
                id="home"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                id="header_dropdown"
              >
                <a
                  className="dropdown-item"
                  href="Complete Designing and Development Website"
                >
                  Complete Designing and <br />
                  Development Website
                </a>
                <a className="dropdown-item" href="Creative Web Design">
                  Creative Web Design
                </a>

                <a className="dropdown-item" href="Custom Web Development">
                  Custom Web Development
                </a>
                <a className="dropdown-item" href="Multimedia Presentations">
                  Multimedia Presentations
                </a>
                <a className="dropdown-item" href="Search Engine Optimisation">
                  Search Engine Optimisation
                </a>
                <a className="dropdown-item" href="e-Business">
                  e-Business
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="Clients" id="home">
                Clients
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="Products" id="home">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="Contact us" id="home">
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
