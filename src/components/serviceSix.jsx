import React from "react";
import servi from "../images/servi.jpg";
import servicesix2 from "../images/servicesix2.jpg";

export default function serviceSix() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={servi} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicesix-h2">e-Business</h2>
              <h6 id="servicespart2-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">e-Business</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*first img of services partone us page complete*/}
      {/*image divide section start */}
      <div className="container py-5">
        <div className="row pt-4">
          <div className="col-md-6">
            <h1 id="complete-design-h1">e-Business</h1>
            <p id="complete-design-para">
              With our dynamic database enabled e-business applications, we make
              the entire world your potential customer. With these, we let you
              manage customer relations, supply chains, sales forces, human
              resources and management information systems online. In case of
              these database driven e-business applications, we also have the
              option of online payments using different payment gateways
              including Authorize. NET, Verisign and so on.
            </p>
          </div>
          <div className="col-md-6">
            <img src={servicesix2} id="service-three-img" alt="my-servicesix" />
          </div>
        </div>
      </div>

      {/*image divide section complete */}
    </>
  );
}
