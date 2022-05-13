import React from "react";
import servicefour from "../images/servicefour.jpg";
import servicefour1 from "../images/servicefour1.jpg";

export default function serviceFour() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={servicefour} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicespart2-h2">Multimedia Presentations</h2>
              <h6 id="servicespart2-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">Multimedia Presentations</a>
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
            <h1 id="complete-design-h1">Multimedia Presentations</h1>
            <p id="complete-design-para">
              As a company specializing in affordable custom logo design,
              corporate logo design etc., our clients sincerely look forward to
              us to convey an image for them representing their philosophy,
              products, and/or services. Needless to say, our logo designs craft
              the business identities of our clients in a highly professional
              way, that too, at extremely minimized costs. Our highly skilled
              designers create state-of-the-art Multimedia solutions for CD-ROM,
              trade show demos, training, education and sales
              presentations.These interactive productions are completed for
              delivery on CD-ROM or in Shockwave format for the web. With the
              superb craftsmanship and creative genius of Mass Software
              Solutions Pvt. Ltd., we can incorporate high-end graphics,
              animation, audio, video, and interactive features into a
              presentation delivered on CD-ROM, downloaded to your laptop or
              sent over the Internet.
            </p>
          </div>
          <div className="col-md-6">
            <img src={servicefour1} id="service-four-img" alt="my-pic" />
          </div>
        </div>
      </div>
      {/*image divide section complete */}
    </>
  );
}
