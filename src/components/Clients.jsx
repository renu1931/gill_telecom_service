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

            <div id="client_image-text">
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
          height: "auto",
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
          <div id="Show" class="container tab-pane active" data-aos="zoom-in">
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
                    height="204"
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
                <div id="show-1" style={{ marginTop: "-30px" }}>
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
                <div id="show-1" style={{ marginTop: "-30px" }}>
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
                <div id="show-1" style={{ marginTop: "-30px" }}>
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
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Old-Motor-Cycles-for-Sale-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Old Motorcycles for Sale</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-25px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/BSA-For-Sale-480x480-3.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">BSA for Sale</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Old-Motor-Bikes-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Old Motor Bikes</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-25px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/cashfromhome24-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Cash from Home24</h2>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div id="show-1" style={{ marginTop: "-25px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash24-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash24</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash365-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash365</h2>
                </div>
                <div id="show-1" style={{ marginTop: "20px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Carolinavallejo-480x480-2.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Carolinavallejo</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-10px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Lazyblood-480x480-1-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Lazyblood</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-40px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/CRUIZE-BEVERAGES-India-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Cruize Beverages</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-20px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Bohemian-Style-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Bohemian Style</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/neevraz.sg_-480x480-1.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Neevraz</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-30px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/aryan-public-school-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Aryan Public School</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-40px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Central-Institute-for-Research-on-Buffaloes-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">
                    Central Institute for Research on Buffaloes
                  </h2>
                </div>
                <div id="show-1" style={{ marginTop: "-20px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Urdhavobhava-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Udhravobhava</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Vidya-Bharti-Day-Boarding-Public-School-Bringing-Excellence-480x480-1.png"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Vidhya Bharti Day Boarding Public School</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-30px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/ameristar-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Ameri Star Services</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-48px" }}>
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
                <div id="show-1" style={{ marginTop: "-48px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/carmella-korner-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Carmella Korner</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidery-city-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery City</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidery-designs-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery Designs</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidey-shop-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery Shop</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/secrets-of-embroidery-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Secrets of Embroidery</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/steam-train-ride-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Steam Train Ride</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/incentivesolar-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Incentive Solar</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/BGC-Monash-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">The Wall Store</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/hisar-biz-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Online Business Page</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/surya-products-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Surya Products</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/EasyPlot-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">EasyPlot</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash24-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash24</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash365-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash365</h2>
                </div>
                <div id="show-1">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Car-Insurance-Quotes-Hub-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Car Insurance Quotes Hu</h2>
                </div>
                <div id="show-1" style={{ marginTop: "-50px" }}>
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/lavore-da-casa-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Lavorare Da Casa</h2>
                </div>
              </div>
            </div>
          </div>
          {/*show all images complete*/}

          {/*automobile section start */}
          <div id="Automobile" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Old-Motor-Cycles-for-Sale-480x480-2.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Old Motorcycles for Sale</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/BSA-For-Sale-480x480-3.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">BSA for Sale</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Old-Motor-Bikes-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Old Motor Bikes</h2>
              </div>
            </div>
          </div>

          {/*automobile section complete */}

          {/*bars section start */}
          <div id="Bars" class="container tab-pane fade">
            <br />
            <div id="show-1" data-aos="zoom-in">
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
            <div id="show-1" data-aos="zoom-in">
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

          {/*blog section start */}
          <div id="Blog" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Carolinavallejo-480x480-2.png"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Carolinavallejo</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Lazyblood-480x480-1-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Lazyblood</h2>
              </div>
            </div>
          </div>
          {/*blog section complete */}
          {/*business section start */}
          <div id="Business" class="container tab-pane fade">
            <br />
            <div style={{ flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/carmella-korner-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Carmella Korner</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidery-city-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery City</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidery-designs-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery Designs</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/embroidey-shop-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Embroidery Shop</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/secrets-of-embroidery-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Secrets of Embroidery</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/steam-train-ride-480x480-2.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Steam Train Ride</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/incentivesolar-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Incentive Solar</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/BGC-Monash-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">The Wall Store</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/hisar-biz-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Online Business Page</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/surya-products-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Surya Products</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/EasyPlot-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">EasyPlot</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/jindal-structures-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Jindal Structure (Pvt.) Ltd</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/sanyam-consultant-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Sanyam Consultants</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Plaster-Deals1-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Plaster Deals</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/cashfromhome24-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Cash from Home24</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash24-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash24</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash365-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Real Cash365</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/Car-Insurance-Quotes-Hub-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Car Insurance Quotes Hu</h2>
                </div>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/lavore-da-casa-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Lavorare Da Casa</h2>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div id="show-1" data-aos="zoom-in">
                  <img
                    width="260"
                    height="234"
                    src="https://gilltelecom.com/wp-content/uploads/2021/09/ameristar-480x480-1.jpg"
                    class="img-responsive"
                    alt="show-all"
                    loading="lazy"
                    id="show-all"
                  />
                  <h2 id="show-h2">Ameri Star Services</h2>
                </div>
              </div>
            </div>
          </div>
          {/*business section complete */}

          {/*education section start */}
          <div id="Education" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/aryan-public-school-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Aryan Public School</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Central-Institute-for-Research-on-Buffaloes-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">
                  Central Institute for Research on Buffaloes
                </h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Urdhavobhava-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Udhravobhava</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/Vidya-Bharti-Day-Boarding-Public-School-Bringing-Excellence-480x480-1.png"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Vidhya Bharti Day Boarding Public School</h2>
              </div>
            </div>
          </div>
          {/*education section complete */}

          {/*entertainment section start */}
          <div id="Entertainment" class="container tab-pane fade">
            <br />
            <div id="show-1" data-aos="zoom-in">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/neevraz.sg_-480x480-1.png"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Neevraz</h2>
            </div>
          </div>
          {/*entertainment section complete */}

          {/*fashion section start */}
          <div id="Fashion" class="container tab-pane fade">
            <br />
            <div id="show-1" data-aos="zoom-in">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/Bohemian-Style-480x480-1.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Bohemian Style</h2>
            </div>
          </div>
          {/*fashion section complete */}

          {/*food section start */}
          <div id="Food" class="container tab-pane fade">
            <br />
            <div id="show-1" data-aos="zoom-in">
              <img
                width="260"
                height="234"
                src="https://gilltelecom.com/wp-content/uploads/2021/09/CRUIZE-BEVERAGES-India-480x480-1.jpg"
                class="img-responsive"
                alt="show-all"
                loading="lazy"
                id="show-all"
              />
              <h2 id="show-h2">Cruize Beverages</h2>
            </div>
          </div>
          {/*food section complete */}

          {/*games section start */}
          <div id="Games" class="container tab-pane fade">
            <br />

            <div style={{ flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
            <div id="show-1" data-aos="zoom-in">
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

          {/*online section start*/}
          <div id="Online" class="container tab-pane fade">
            <br />
            <div style={{ display: "flex" }}>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/cashfromhome24-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Cash from Home24</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash24-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Real Cash24</h2>
              </div>
              <div id="show-1" data-aos="zoom-in">
                <img
                  width="260"
                  height="234"
                  src="https://gilltelecom.com/wp-content/uploads/2021/09/realcash365-480x480-1.jpg"
                  class="img-responsive"
                  alt="show-all"
                  loading="lazy"
                  id="show-all"
                />
                <h2 id="show-h2">Real Cash365</h2>
              </div>
            </div>
          </div>
          {/*online section complete*/}

          {/*others section start*/}
          <div id="Others" class="container tab-pane fade">
            <br />
            <div id="show-1" data-aos="zoom-in">
              <img
                width="260"
                height="204"
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
                <div id="show-1" data-aos="zoom-in">
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
            <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
              <div id="show-1" data-aos="zoom-in">
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
            <div id="show-1" data-aos="zoom-in">
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
