import React from "react";
import clients from "../images/clients.jpg";
import clients_background from "../images/clients_background.jpg";

export default function Clients() {
  return (
    <>
      {/* image section start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={clients} alt="my-img" id="about_img" />

            <div id="about_image-text">
              <h2 id="about-h2">Clients</h2>
              <h6 id="about-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about"> Clients</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*clients heading and paragraph */}
      <div className="container py-4">
        <div className="row pt-5">
          <div className="col-md-12">
            <h1 id="client-h1">Clients</h1>
            <p id="client-para">
              We strive to be a strategic partner with our customers by
              leveraging our expertise and experience to provide innovative,
              responsive and cost-effective IT / IT Enabled services &
              solutions.
            </p>
          </div>
        </div>
      </div>
      {/*onclick background image*/}

      {/*onclick first card*/}
      <div
        class="container-fluid py-5"
        style={{
          backgroundImage: "url(" + clients_background + ")",
          height: "2550px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/*nav pills*/}
        <ul class="nav nav-pills" role="tablist" id="onclick-ul">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#Show">
              Show All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Automobile">
              Automobile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Bars">
              Bars
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Beauty">
              Beauty
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Blog">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Business">
              Business/Industries
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Entertainment">
              Entertainment
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Fashion">
              Fashion
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Food">
              Food & Drink
            </a>
          </li>

          <li class="nav-item" style={{ marginLeft: "80px" }}>
            <a class="nav-link" data-toggle="pill" href="#Games">
              Games
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Hospitals">
              Hospitals/Clinic
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Hotels">
              Hotels
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Lawyer">
              Lawyer
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Online">
              Online Earning
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Others">
              Others
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Real">
              Real Estate
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Technology">
              Technology
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#Travel">
              Travel
            </a>
          </li>
          <li class="nav-item" style={{ margin: "auto", marginTop: "8px" }}>
            <a class="nav-link" data-toggle="pill" href="#Welfare">
              Welfare Organization
            </a>
          </li>
        </ul>

        {/*tab pins*/}
        {/*show all images*/}
        <div class="tab-content py-5">
          <div id="Show" class="container tab-pane active">
            <br />
            <div style={{ flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-bar-480x480-3.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Bar</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-gratis-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Gratis</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-gratis-online-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Gratis Online</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/casino-no-deposit-bonus-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Casino No Deposit Bonus</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Palace-Hotel-Club-Casino-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canada Palace Club</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Bulletz-Gaming-480x480-3.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Bulletz Gaming</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/all-india-ex-airmen-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">All India Ex-Airmen Wel</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/evaluermedspa-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Evaluer Medspa</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Casino-Hotel-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canadian Casino Hotel</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Golden-Palace-Hotel-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canada Golden Palace</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Palace-Hotel-Club-Casino-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canada Palace Club</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Winpalacedeal-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">AWin Palace Deal</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/snindia-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">S.N Singal & Company</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/AvailTech-Tech-Support-IT-Services-480x480-1.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Avail Tech</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/bhlawyers-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Law Offices of Alon Darvi</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/wine-palace-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Wine Palacei</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/pleasant-hill-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Pleasant Hill</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/readnsurf-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Read n surf</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/ActivityInfo-480x480-2.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Activity Info</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Sandiego4salehomes-480x480-1.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Search Home for Sale</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/San-Diego-Real-Estate-Agent-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">San Diego Real Estate</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/shanti-hospital-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Shanti Hospital & Kshar</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Juneja-Homoeopathic-Clinic-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Juneja Homoeopathic Cl…….</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/geetanjali-hospital-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Geetanjali Hospital</h2>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Vegas-Best-Offers-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Vegas Best Offers</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Just-Like-Vegas-Real-Vegas-Experience-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Just Like Vegas</h2>
                </div>
                <div id="show-1" style={{ marginTop: "25px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Vegas-Deals-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canadian Vegas Deals</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Vegas-Offers-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canadian Vegas Offers</h2>
                </div>
              </div>
            </div>
          </div>
          {/*show all images complete*/}

          <div id="Automobile" class="container tab-pane fade">
            <br />
            <p>hello2</p>
          </div>
          {/*bars section start */}
          <div id="Bars" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/wine-palace-480x480-2.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Wine Palacei</h2>
            </div>
          </div>
          {/*bars section complete */}

          {/*beauty section start */}
          <div id="Beauty" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/evaluermedspa-480x480-1.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Evaluer Medspa</h2>
            </div>
          </div>
          {/*beauty section complete */}
          <div id="Blog" class="container tab-pane fade">
            <br />
            <p>hello4</p>
          </div>
          <div id="Business" class="container tab-pane fade">
            <br />
            <p>hello6</p>
          </div>
          <div id="Education" class="container tab-pane fade">
            <br />
            <p>hello7</p>
          </div>
          <div id="Entertainment" class="container tab-pane fade">
            <br />
            <p>hello8</p>
          </div>
          <div id="Fashion" class="container tab-pane fade">
            <br />
            <p>hello9</p>
          </div>
          <div id="Food" class="container tab-pane fade">
            <br />
            <p>hello10</p>
          </div>
          {/*games section start */}
          <div id="Games" class="container tab-pane fade">
            <br />

            <div style={{ flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-bar-480x480-3.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Bar</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-gratis-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Gratis</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/slot-machine-gratis-online-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Slot Machine Gratis Online</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/casino-no-deposit-bonus-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Casino No Deposit Bonus</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Palace-Hotel-Club-Casino-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Canada Palace Club</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Bulletz-Gaming-480x480-3.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Bulletz Gaming</h2>
                </div>
              </div>
            </div>
          </div>
          {/*games section complete */}

          {/*hospital section start */}
          <div id="Hospitals" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/shanti-hospital-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Shanti Hospital & Kshar</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/geetanjali-hospital-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Geetanjali Hospital</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Juneja-Homoeopathic-Clinic-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Juneja Homoeopathic Cl…….</h2>
              </div>
            </div>
          </div>
          {/*hospital section start */}

          {/*hotel section start */}
          <div id="Hotels" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Casino-Hotel-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Canadian Casino Hotel</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Golden-Palace-Hotel-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Canada Golden Palace</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Palace-Hotel-Club-Casino-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Canada Palace Club</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Winpalacedeal-480x480-2.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">AWin Palace Deal</h2>
              </div>
            </div>
          </div>
          {/*hotel section complete */}

          {/*lawyer section start */}
          <div id="Lawyer" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/bhlawyers-480x480-2.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Law Offices of Alon Darvi</h2>
            </div>
          </div>
          {/*lawyer section complete */}
          <div id="Online" class="container tab-pane fade">
            <br />
            <p>hello15</p>
          </div>
          {/*others section start*/}
          <div id="Others" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/snindia-480x480-2.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">S.N Singal & Company</h2>
            </div>
          </div>
          {/*others complete*/}

          {/*real estate start*/}
          <div id="Real" class="container tab-pane fade">
            <br />
            <div style={{ flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/pleasant-hill-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Pleasant Hill</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/readnsurf-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Read n surf</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/ActivityInfo-480x480-2.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Activity Info</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Sandiego4salehomes-480x480-1.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Search Home for Sale</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/San-Diego-Real-Estate-Agent-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">San Diego Real Estate</h2>
                </div>
              </div>
            </div>
          </div>
          {/*real estate complete*/}

          {/*technology start */}
          <div id="Technology" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/AvailTech-Tech-Support-IT-Services-480x480-1.png"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Avail Tech</h2>
            </div>
          </div>
          {/*technology complete*/}

          {/*travel section start */}
          <div id="Travel" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Vegas-Best-Offers-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Vegas Best Offers</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Just-Like-Vegas-Real-Vegas-Experience-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Just Like Vegas</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Vegas-Deals-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Canadian Vegas Deals</h2>
              </div>
              <div id="show-1">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Canadian-Vegas-Offers-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Canadian Vegas Offers</h2>
              </div>
            </div>
          </div>
          {/*travel section complete */}

          {/*welfare section start */}
          <div id="Welfare" class="container tab-pane fade">
            <br />
            <div id="show-1">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/all-india-ex-airmen-480x480-1.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">All India Ex-Airmen Wel</h2>
            </div>
          </div>
          {/*welfare section complete */}
        </div>
      </div>
    </>
  );
}
