import React from "react";
import about_main from "../images/about_main.jpg";
function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="about-img-main">
              <img src={about_main} alt="my-img" id="about_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
