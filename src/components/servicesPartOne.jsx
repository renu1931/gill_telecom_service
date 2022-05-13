import React from "react";
import servicespart from "../images/servicespart.jpg";
import complete_design from "../images/complete_design.jpg";

export default function servicesPartOne() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={servicespart} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicespart-h2">
                Complete WebSite Development and Website Designing
              </h2>
              <h6 id="servicespart-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">
                  Complete WebSite Development and Website Designing
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*first img of services partone us page complete*/}
      {/*image divide section start */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={complete_design} alt="my-pic" id="complete_design-img" />
          </div>
          <div className="col-md-6">
            <h1 id="complete-design-h1">
              Complete WebSite Development and Website Designing
            </h1>
            <p id="complete-design-para">
              Does your company or organization need a website or email but
              you’re not sure where to start? Do you already have a website but
              need someone to handle updates or on going maintenance?
            </p>
            <p id="complete-design-para2">
              If so, Gill Telecom Service can help. We can provide a full range
              of web services including Domain Name Registration, Web Design,
              Web Development, Web Hosting, Email hosting, Search Engine
              Optimization, web application development and integration.
            </p>
          </div>
          <div id="services-content"></div>
          <p id="complete-design-para3">
            You will have a single point of contact for all of your website
            needs and the assurance that, since your website is hosted on one of
            Gill Telecom Service’s Linux web servers, your site will be
            available for your clients. We are a total web solutions provider.
            We are here to create your online presence. We build websites and
            applications which gives you an edge in the market. We are a total
            web solutions provider. We are here to create your online presence.
            We build websites and applications which gives you an edge in the
            market.
          </p>
        </div>
      </div>
      {/*image divide section complete */}
    </>
  );
}
