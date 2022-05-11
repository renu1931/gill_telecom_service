import React from "react";
import about_us_main from "../images/about_us_main.jpg";
import about_us from "../images/about_us.jpg";
import web_development from "../images/web_development.jpg";
import branding from "../images/branding.jpg";
function About() {
  return (
    <>
      {/* image section start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={about_us_main} alt="my-img" id="about_img" />

            <div id="about_image-text">
              <h2 id="about-h2">About</h2>
              <h6 id="about-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about"> About</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* image section complete */}
      <div className="container py-5">
        <div className="row py-3">
          <div className="col-md-7" data-aos="fade-left">
            <h3 id="about_us-h3">About us</h3>
            <p id="about_us-p">
              Gill Telecom Service is a ‘Complete Technology Resource’ for
              residential and small to medium business customers. GTS is a
              Hisar, Haryana-based Internet communications firm that develops
              cutting edge web programs for corporations, trade associations,
              advocacy groups, political candidates and non-profits.
            </p>
            <p id="about_us-p">
              The center was founded by Jangsher Singh Gill. on 1st November
              1993, GTS began as a traditional public affairs firm. As it became
              evident in the mid-1990s that the Internet was transforming the
              way people interact with each other, Gill Telecom Service shifted
              away from traditional, offline public affairs offerings to focus
              on web-based programs. As an early proponent of the Internet as
              communications platform, GTS is one of the few firms with over a
              15-year history of achievement in the field of online
              communications.
            </p>
          </div>
          <div className="col-md-5" data-aos="fade-left">
            <img src={about_us} alt="about_us_image" id="about_us_img" />
          </div>
        </div>
      </div>
      {/*aboout background image section start*/}
      <section style={{ position: "relative" }} data-aos="fade-right">
        <img
          src={web_development}
          alt="web-development-img"
          id="web_development_about"
        />
        <div id="background_image_text"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" id="on-text">
              <p id="background_about-para">
                Today, GTS is a full service Internet communications firm made
                up of a culturally diverse team of designers, programmers and
                strategists. Gill Telecom Services’s sole focus is on helping
                our clients use technology to converse and communicate with the
                audiences that matter to them. In everything it does, Gill
                Telecom Service believes the power of the Internet lies not in
                the technology, but in it its strategic use.
              </p>
              <p id="background_about-para2">
                We provide our customers with good products and services at a
                fair price, and believe that our business will prosper as a
                result. We have more than 15 years of experience in the
                technology field and are eager to use that experience to help
                you get the technology products and service that you deserve.
                From extranets to public-facing websites, from the simple to the
                complex, The Gill Telecom Service creates Internet programs that
                make an impact. With the attention span of Internet users
                getting shorter by the day, GTS believes the design of a website
                should always serve the content. Ultimately, whether an online
                experience is positive or negative is determined almost entirely
                by whether your visitor finds the information they are looking
                for easily. GTS builds websites that are easy for clients to
                maintain and simple for end users to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" data-aos="fade-left">
        <div className="row">
          <div className="col-md-6">
            <img src={branding} alt="branding_img" id="brandimg_logo" />
          </div>
          <div
            className="col-md-6"
            style={{ backgroundColor: "#000", borderBottom: "2px solid white" }}
          >
            <p id="brand-para">
              We are professional Web design and Website development company in
              India that supplies services of web design and development, web
              application development, professional ecommerce online shopping
              systems, Flash multimedia, website hosting, search engine
              promotion (SEO), software development and graphics design.
            </p>
            <p id="brand-para2">
              Telecom Service features an integrateddevelopment and designing
              team of web consultants, creative designers, writers, programmers
              and marketing and SEO professionals that know how to get online
              results. we have more than 2100 clients. more than 600 schools,
              college, poletechnic, engg college,business schoolin haryana
              punjab and north india,We are software Development and Outsourcing
              Company based in India US. We offer Top-quality professional
              software, CRMs and web programming services at globally affordable
              prices. We have successfully built more than 2200 web sites for
              clients from all over the World including USA, UK, Australia,
              Thailand, Itali and more. We specialize in AJAX/PHP/ ASP.net
              programming and Web Design using Macromedia Tools. We have one of
              the best web design teams in India to design globally appealing
              current technology web sites.
            </p>
          </div>
        </div>
      </div>

      {/*aboout background image section complete*/}
    </>
  );
}
export default About;
