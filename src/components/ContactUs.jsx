import React from "react";
import contact_us from "../images/contact_us.jpg";

export default function ContactUs() {
  return (
    <>
      {/*first img of contact us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={contact_us} alt="my-img" id="about_img" />

            <div id="about_image-text1">
              <h2 id="services-h2">Contact us </h2>
              <h6 id="about-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about"> Contact us</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", paddingTop: "100px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="00 0 540 320">
          <path
            fill="#fcb900"
            fill-opacity="1"
            d="M0,64L1440,288L1440,320L0,320Z"
          ></path>
        </svg>

        <div className="container-fluid" style={{ overflow: "hidden" }}>
          <h1 id="contact-h1">
            Contact <span>us</span>
          </h1>
          <p id="contact-p">
            Don’t wait until tomorrow. Talk to one of our consultants today and
            learn how to start leveraging your business.
          </p>

          <div className="row">
            <div
              className="col-md-6"
              style={{ textAlign: "center", position: "absolute", top: "50%" }}
            >
              <h4 id="contact_details">
                Contact<span> Details</span>
              </h4>
              <div id="contact-details-info">
                <h4>
                  <i class="fa-solid fa-location-dot" id="contact-icon"></i>
                  Address
                </h4>
                <p id="contact-main-para">
                  Gill Telecom Service 138 MC Colony
                  <br /> <span>Hisar Haryana (India)</span>
                </p>
              </div>
              <div id="contact-details-info">
                <h4>
                  <i class="fa-solid fa-envelope" id="contact-icon2"></i>
                  Email
                </h4>
                <p id="contact-main-para2">support@gillwebs.com</p>
              </div>
              <div id="contact-details-info">
                <h4>
                  <i class="fa-solid fa-blender-phone" id="contact-icon3"></i>
                  Phone
                </h4>
                <p id="contact-main-para3">91 9354311177</p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundColor: "black",
              paddingLeft: "30px",
              paddingRight: "30px",
              position: "absolute",
              top: "30%",
              right: "8%",
              width: "42%",
              paddingBottom: "3px",
            }}
          >
            <form>
              <h1 id="form-h1">Get In Touch</h1>
              <input placeholder="Name" id="contact_input" />
              <br />
              <input placeholder="Email" id="contact_input" />
              <br />
              <input placeholder="Phone" id="contact_input" />
              <br />
              <input placeholder="Message" id="contact_input2" />
              <br />
              <button type="button" id="contact_input-btn">
                Submit<i class="fa-solid fa-angles-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*finish first img of contact us page */}
      {/*map start */}
      <section id="map-section">
        <iframe
          id="map-iframe"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=138%2C%20M.%20C.%20Colony%2C%20Urban%20Estate%20II%2C%20Hisar%2C%20Haryana%20125005%2C%20India&amp;t=m&amp;z=8&amp;output=embed&amp;iwloc=near"
          title="138, M. C. Colony, Urban Estate II, Hisar, Haryana 125005, India"
          aria-label="138, M. C. Colony, Urban Estate II, Hisar, Haryana 125005, India"
        ></iframe>
      </section>
      {/*map start */}
    </>
  );
}
