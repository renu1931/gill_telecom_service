import React from "react";
import home_slide from "../images/home_slide.jpg";
import home_slide2 from "../images/home_slide2.jpg";
import flip1 from "../images/flip1.png";
import flip2 from "../images/flip2.png";
import flip3 from "../images/flip3.jpg";
import flip4 from "../images/flip4.png";
import flip5 from "../images/flip5.png";
import flip6 from "../images/flip6.png";
import flip7 from "../images/flip7.jpg";
import flip8 from "../images/flip8.jpg";
import our_client1 from "../images/our_client1.png";
import our_client2 from "../images/our_client2.jpg";
import our_client3 from "../images/our_client3.jpg";
import our_client4 from "../images/our_client4.jpg";
import input_section_img from "../images/input_section_img.jpg";
import office_discussion from "../images/office_discussion.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 120,
  duration: 400,
  once: false,
});

export default function Home() {
  return (
    <>
      {/*slider content stasrt */}
      <div className="container-fluid">
        <div className="row">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="web"
              role="tabpanel"
              aria-labelledby="web-tab"
            >
              <img src={home_slide} alt="slider-img" id="home-slider-img" />
              <div id="home_slide_overlay"> </div>
              <h1 id="slider-h2" data-aos="fade-right">
                Web Design & Development
              </h1>
              <p id="slider-p" data-aos="fade-down-left">
                Gill Telecom Service is professional Web Design and Website
                <br /> Development company in India that supplies services of
                web
                <br /> design and development,
              </p>
              <button type="button" id="home_button">
                Read More
              </button>
            </div>
            <div
              className="tab-pane fade"
              id="digital"
              role="tabpanel"
              aria-labelledby="digital-tab"
            >
              <img src={home_slide2} alt="slider-img" id="home-slider-img" />
              <h1 id="slider-h2" data-aos="fade-right">
                E-Commerce Graphic Design
              </h1>
              <p id="slider-p" data-aos="fade-down-left">
                Web application development, proffesional ecommerce online
                <br />
                shopping systems, Flash multimedia, website hosting, search
                <br />
                engine promotion (SEO), software developmentand graphics design
              </p>
              <button type="button" id="home_button">
                Read More
              </button>
            </div>
            <ul className="nav" id="myTab">
              <li className="nav-item">
                <a
                  className="nav-link "
                  id="web-tab"
                  data-toggle="tab"
                  href="#web"
                  role="tab"
                  aria-controls="web"
                  aria-selected="true"
                >
                  <span id="slider_circle"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="digital-tab"
                  data-toggle="tab"
                  href="#digital"
                  role="tab"
                  aria-controls="digital"
                  aria-selected="false"
                >
                  <span id="slider_circle2"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*slider content complete */}
      {/*heading section start */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 py-2">
            <h2 id="text" data-aos="fade-up-left">
              Gill Telecom Service is professional Web design
              <br /> and Website development company in India
            </h2>
            <p id="text-paragraph" data-aos="fade-up">
              That supplies services of web design and development, web
              application development, professional ecommerce online
              <br /> shopping systems, Flash multimedia, website hosting, search
              engine promotion (SEO), software development and graphics design.
              Gill Telecom Service features an integrated development and
              designing team of web consultants, creative designers, writers,
              programmers and marketing and SEO professionals that know how to
              get online results.
            </p>
          </div>
        </div>
      </div>
      {/*heading section complete */}

      {/*zoom section start */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-left"
            style={{ backgroundImage: "url(" + office_discussion + ")" }}
          >
            <div id="zoom-image-text">
              <h2 id="zoom-img-h2">Website Development</h2>
              <p id="zoom-img-p">
                We are the complete technology resource for small to medium size
                business. We can provide hourly, on-call technical support for
                clients that do not have an in-house IT support staff or we can
                augment your existing IT support staff for projects or other
                planned or non-planned IT related events.
              </p>
            </div>
          </div>
          <div className="col-md-6" id="zoom-side" data-aos="fade-left">
            <p>
              We can also provide telephone and data service through strategic
              partnerships with the most respected local and national providers.
              Whether your office needs a one-time solution to a new or existing
              problem or is looking to build a mutually beneficial relationship
              with a local technology support company for current and future
              technology needs, Gill Telecom Service is eager for the
              opportunity to earn your business.
            </p>
            <p>
              We have developed many web projects. We have proffesional
              developers in , PHP, Jquery and Ajax. We are having Proffessional
              Designers in Flash, Photoshop and Illustrator. We are specialized
              in mobile webdesigning, html and wordpress theme designing.
            </p>
          </div>
        </div>
      </div>
      {/*zoom section complete */}
      {/*flip section start */}
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-2 py-5">
            <h1 id="our-services-h1" data-aos="fade-down">
              <span>Our</span>
              <br />
              Services
            </h1>
            <p id="our-services-p">
              Does your company or organization need a website or email but
              you’re not sure where to start?
            </p>
            <button id="our-services-btn">
              <a href="/services">
                All Services<i class="fa-solid fa-angles-right"></i>
              </a>
            </button>
          </div>
          <div className="col-md-10 ">
            <div className="row">
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip1}
                        alt="Avatar"
                        style={{ width: "350px", height: "200px" }}
                      />
                      <h5 id="flip-image-text"> Website Development</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text1">Website Development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip2}
                        alt="Avatar"
                        style={{
                          width: "350px",
                          height: "190px",
                        }}
                      />
                      <h5 id="flip-image-text"> Search Engine Optimization</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text2">Search Engine Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip3}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text"> Website Design</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text">Website Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip4}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text"> Website Maintenance</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text1">Website Maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip5}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text"> Email Hosting</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text"> Email Hosting</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip6}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text">e-Business</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text">e-Business</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip7}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text"> Website Hosting</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text">Website Hosting</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={flip8}
                        alt="Avatar"
                        style={{
                          width: "310px",
                          height: "185px",
                        }}
                      />
                      <h5 id="flip-image-text">Domain Name Registration</h5>
                    </div>
                    <div class="flip-card-back">
                      <p id="flip-back-text2">Domain Name Registration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*flip section complete */}
      {/* lets talk section start*/}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 id="let_talk">Let's Talk?</h3>
            <p id="let_talk-p">
              Don’t wait until tomorrow. Talk to one of our consultants today
              and learn how to start leveraging your business.
            </p>
            <form>
              <input placeholder="Name" id="input-1" />
              <br />
              <input placeholder="Phone" id="input-1" />
              <br />
              <input placeholder="Email" id="input-1" />
              <br />
              <input placeholder="Message" id="input-2" />
              <br />
              <button id="input_btn">
                Submit<i class="fa-solid fa-angles-right"></i>
              </button>
            </form>
          </div>
          <div className="col-md-5">
            <div id="input-img-main">
              <img
                src={input_section_img}
                alt="input-field-img"
                id="input_div_img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lets talk section complete*/}
      {/* our clients slider start*/}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#80808047" }}
      >
        <div className="row">
          <div className="col-md-5">
            <h1 id="our_clients">
              Our
              <br />
              <span>Clients</span>
            </h1>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <img src={our_client2} alt="our-clients" id="input_1" />
              </div>
              <div className="col-md-6">
                <img src={our_client3} alt="our-clients" id="input_2" />
              </div>
              <div className="col-md-6">
                <img src={our_client4} alt="our-clients" id="input_3" />
              </div>
              <div className="col-md-6">
                <img src={our_client1} alt="our-clients" id="input_4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our clients slider complete*/}
    </>
  );
}
