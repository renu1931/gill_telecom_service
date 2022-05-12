import React from "react";
import creative_design from "../images/creative_design.jpg";
import creatve_design_dividor from "../images/creatve_design_dividor.jpg";

export default function creativeDesign() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={creative_design} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicespart2-h2">Creative Web Design</h2>
              <h6 id="servicespart2-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">Creative Web Design</a>
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
            <h1 id="complete-design-h1">Creative Web Design</h1>
            <p id="complete-design-para">
              We believe in the phrase “love at first sight”. First impression
              is very important and that can decide the fate of a website. A
              good website should be modern, easy to navigate, rich in content,
              attractive and complement your brand image. A website apart from
              having good deals should also be able to bring back customers and
              reach out to new ones. Our team of talented designers, copy
              writers, developers, internet market specilaists, engage in a pre
              development exercise to identify your need and target audience to
              give the best solution. We carefully study your requirement and
              design an affordable website around them.
            </p>
          </div>
          <div className="col-md-6">
            <img src={creatve_design_dividor} id="complete_design-img" />
          </div>
          <p id="creative-design-para1">
            We believe every website is different. We cover all apsects of
            website design which includes single page wedsites, corporate
            websites, real estate agent websites, doctors websites, Service
            websites to large multilingual portals.
          </p>
        </div>
      </div>
      {/*image divide section complete */}
    </>
  );
}
