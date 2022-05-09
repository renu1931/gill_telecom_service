import React from "react";

export default function Footer() {
  return (
    <>
      {/*footer section start */}
      <div
        className="container-fluid pt-5"
        style={{
          backgroundColor: "#000",
          paddingLeft: "80px",
          borderBottom: "2px solid white",
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <h3 id="footer-about">ABOUT US</h3>
            <p id="footer-about-para">
              Gill Telecom Service is professional Web design and Website
              development company in India…
            </p>
            <a href="https://www.facebook.com/gilltelecom/">
              <i class="fa-brands fa-facebook-square" id="footer-social"></i>
            </a>
            <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fprofile%2Fview%3Fid%3D253180318%26trk%3Dtab_pro&trk=login_reg_redirect">
              <i class="fa-brands fa-linkedin" id="footer-social"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <i class="fa-brands fa-instagram-square" id="footer-social"></i>
            </a>
          </div>
          <div className="col-md-3">
            <h3 id="footer-about">LOCATION</h3>
            <p id="laocation-para">
              <i class="fa-solid fa-location-dot"></i>138 MC Colony, <br />
              <span>Hisar – Haryana India</span>
            </p>
            <p id="laocation-para">
              <i class="fa-solid fa-envelope"></i>support@gillwebs.com
            </p>
            <p id="laocation-para">
              <i class="fa-solid fa-blender-phone"></i>
              91 9354311177
            </p>
          </div>
          <div className="col-md-3">
            <h3 id="footer-services1">Our Services</h3>
            <p id="footer-services">
              <a href="Development and Website Designing">
                <i class="fa-solid fa-circle-check"></i>Complete WebSite
                Development <br />
                <span>and Website Designing</span>
              </a>
            </p>
            <p id="footer-services">
              <a href="Creative Web Design">
                <i class="fa-solid fa-circle-check"></i>
                Creative Web Design
              </a>
            </p>
            <p id="footer-services">
              <a href="Multimedia Presentations">
                <i class="fa-solid fa-circle-check"></i>
                Multimedia Presentations
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <p id="footer-services">
              <a href="Search Engine Optimisation">
                <i class="fa-solid fa-circle-check"></i>
                Search Engine Optimisation
              </a>
            </p>
            <p id="footer-services">
              <a
                href="Custom Web Development
            "
              >
                <i class="fa-solid fa-circle-check"></i>
                Custom Web Development
              </a>
            </p>
            <p id="footer-services">
              <a href="e-Business">
                <i class="fa-solid fa-circle-check"></i>
                e-Business
              </a>
            </p>
          </div>
          <hr id="footer-hr" />
        </div>
      </div>
      <p id="footer-last-p">
        Copyright 2006-2021 <span>Gill Telecom Service</span>
      </p>
      {/*footer section complete */}
    </>
  );
}
