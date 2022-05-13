import React from "react";
import servicethree from "../images/servicethree.jpg";
import servicethree1 from "../images/servicethree1.jpg";
import servicethree2 from "../images/servicethree2.jpg";
export default function servicePartThree() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={servicethree} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicespart2-h2">Custom Web Development</h2>
              <h6 id="servicespart2-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">Custom Web Development</a>
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
            <h1 id="complete-design-h1">Custom Web Development</h1>
            <p id="complete-design-para">
              Application development has undergone a transition over the last
              few years, with the migration of applications from traditional
              client/server designs to the Internet. Web based applications have
              assumed a major portion of the applications market. We specialize
              in web based application development since we feel this is going
              to be the future technology.
            </p>
          </div>
          <div className="col-md-6">
            <img src={servicethree1} id="service-three-img" alt="my-pic" />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row py-4">
          <div className="col-md-6">
            <img src={servicethree2} id="complete_design-img" alt="my-pic" />
          </div>
          <div className="col-md-6">
            <p id="servicethree-para">
              An in-depth knowledge of various technologies enables us to
              provide end-to-end solutions and services. We add value to our
              client�s businesses through innovative web applications. We
              provide scalable and flexible solutions tailored to our clients’
              business needs. We have built our business around stringent
              quality control by incorporating rigorous checking processes which
              ensure product quality and on-time delivery. Our team of system
              designers and project managers are capable of delivering
              innovative yet simple solutions.
            </p>
            <p id="servicethree-para2">
              We provide solutions on, AJAX, PHP, MySQL, XML
            </p>
          </div>
        </div>
      </div>
      {/*image divide section complete */}
    </>
  );
}
