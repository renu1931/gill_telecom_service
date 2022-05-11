import React from "react";
import services_main from "../images/services_main.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";

export default function Service() {
  return (
    <>
      <div className="container-fluid">
        <img
          src={services_main}
          alt="services_section_first_image"
          id="services_section_first_image"
        />
        <div className="row">
          <div className="col-md-12">
            <div id="service_image-text">
              <h2 id="about-h2">Services</h2>
              <h6 id="about-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about"> Services</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*card section start */}
      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-right"
          >
            <img src={card1} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">Complete Website Designing And Development</h1>
            <p id="card-p">
              Does your company or organization need a website or email but
              you’re not sure where to start? Do you already have a website but
              need
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="Complete Website Designing And Development">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-up"
          >
            <img src={card2} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">Creative Web Design</h1>
            <p id="card-p2">
              We believe in the phrase “love at first sight”. First impression
              is very important and that can decide the fate of a website. good
              website should be modern,
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="Creative Web Design">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-left"
          >
            <img src={card3} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">Custom Web Development</h1>
            <p id="card-p">
              Application development has undergone a transition over the last
              few years, with the migration of applications from traditional
              client/server designs to the Internet.
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="Custom Web Development">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-right"
          >
            <img src={card4} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">Multimedia Presentations</h1>
            <p id="card-p">
              As a company specializing in affordable custom logo design,
              corporate logo design etc., our clients sincerely look forward to
              us to convey an image for them representing their philosophy,
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="Multimedia Presentations">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-up"
          >
            <img src={card5} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">Search Engine Optimisation</h1>
            <p id="card-p2">
              One of the keys to a successful website is effective Internet
              marketing through well-worded site descriptions and loaded
              keywords entered into Internet
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="Search Engine Optimisation">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              border: "2px solid #80808038",
              margin: "30px 20px",
              width: "330px",
              boxShadow: "3px 3px 3px #808080c4",
            }}
            data-aos="fade-left"
          >
            <img src={card6} alt="card1_image" id="card-1-img" />
            <h1 id="card-h1">e-Business</h1>
            <p id="card-p2">
              With our dynamic database enabled e-business applications, we make
              the entire world your potential customer. With these, we let
              youmanage customer relatisales forces,
            </p>
            <div id="card1-btn-div">
              <button type="button" id="card-1-btn">
                <a href="e-Business">
                  Read More<i class="fa-solid fa-angles-right"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*card section start */}
    </>
  );
}
