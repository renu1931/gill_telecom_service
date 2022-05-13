import React from "react";
import servicefive from "../images/servicefive.jpg";
import servicefive1 from "../images/servicefive1.jpg";

export default function serviceFive() {
  return (
    <>
      {/*first img of services partone us page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={servicefive} alt="my-img" id="about_img" />

            <div id="about_image-text2">
              <h2 id="servicespart2-h2">Search Engine Optimisation</h2>
              <h6 id="servicespart2-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about">Search Engine Optimisation</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*first img of services partone us page complete*/}
      {/*image divide section start */}
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6">
            <h1 id="complete-design-h1">Search Engine Optimisation</h1>
            <p id="complete-design-para">
              One of the keys to a successful website is effective Internet
              marketing through well-worded site descriptions and loaded
              keywords entered into Internet database search engines and
              directories. Our marketing specialists know all the tricks to make
              your Web address appear in the “Search Results” list! Contact us
              for a price on our Custom Online Marketing Services.
            </p>
            <p id="service-five-para">
              The most crucial part of our Internet marketing strategies is
              professional cost effective search engine optimization. Submitting
              your site to major Search Engines like Google, Yahoo, Altavista
              and MSN, we guarantee top listings of your website within months.
              Remember, SEO is not a one-time process, but a continuous one that
              has to be rigorously maintained through proper examination and
              placement of optimized graphics, Meta tags, Alt tags, links,
              keywords, keyword placement and testing of code. At Mass Software
              Solutions Pvt. Ltd., we assure our clients that this process would
              result in the best commercial results for your company
            </p>
          </div>
          <div className="col-md-6">
            <img src={servicefive1} id="service-five-img" alt="my-pic" />
          </div>
          <p id="complete-design-para4">
            Our search engine solutions include : Analysis of the web site,
            Research Keywords for the web site, Change the Meta Tags, Modify the
            content, Submit the web site to all the major search engines,
            Generate reciprocate links for the web site.
          </p>
        </div>
      </div>
      {/*image divide section complete */}
    </>
  );
}
