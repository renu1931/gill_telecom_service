import React from "react";
import products from "../images/products.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import product_slider1 from "../images/product_slider1.jpg";
import product_slider2 from "../images/product_slider2.jpg";
import product_slider3 from "../images/product_slider3.jpg";
import product_slider4 from "../images/product_slider4.jpg";
import products_slider5 from "../images/products_slider5.jpg";
import products_slider6 from "../images/products_slider6.jpg";
import products_slider7 from "../images/products_slider7.jpg";
import products_slider8 from "../images/products_slider8.jpg";
import products_slider9 from "../images/products_slider9.png";
import products_slider10 from "../images/products_slider10.png";
import products_slider11 from "../images/products_slider11.png";
import products_slider12 from "../images/products_slider12.png";
import products_slider13 from "../images/products_slider13.jpg";
import products_slider14 from "../images/products_slider14.png";
import products_slider15 from "../images/products_slider15.png";
import products_slider16 from "../images/products_slider16.jpg";
import products_slider17 from "../images/products_slider17.png";
import products_slider18 from "../images/products_slider18.jpg";
import products_slider19 from "../images/products_slider19.jpg";
import products_slider20 from "../images/products_slider20.jpg";
import products_slider21 from "../images/products_slider21.jpg";
import products_slider22 from "../images/products_slider22.jpg";
import products_slider23 from "../images/products_slider23.jpg";
import products_slider24 from "../images/products_slider24.jpg";
import products_slider25 from "../images/products_slider25.jpg";
import products_slider26 from "../images/products_slider26.jpg";
import products_slider27 from "../images/products_slider27.jpg";
import products_slider28 from "../images/products_slider28.jpg";
import products_slider29 from "../images/products_slider29.jpg";
import products_slider30 from "../images/products_slider30.jpg";
import products_slider31 from "../images/products_slider31.jpg";
import products_slider32 from "../images/products_slider32.jpg";
import products_slider33 from "../images/products_slider33.jpg";
import products_slider34 from "../images/products_slider34.jpg";
import products_slider35 from "../images/products_slider35.jpg";
import products_slider36 from "../images/products_slider36.jpg";
import products_slider37 from "../images/products_slider37.jpg";
import products_slider38 from "../images/products_slider38.jpg";
import products_slider39 from "../images/products_slider39.jpg";
import products_slider40 from "../images/products_slider40.jpg";
import products_slider41 from "../images/products_slider41.jpg";
import products_slider42 from "../images/products_slider42.jpg";

export default function Products() {
  return (
    <>
      {/* image section start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img src={products} alt="my-img" id="about_img" />

            <div id="products_image-text">
              <h2 id="about-h2">Products</h2>
              <h6 id="about-h6">
                <a href="/">Home</a>
                <i class="fa-solid fa-angles-right"></i>
                <a href="/about"> Products</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/*slider section start*/}
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={product_slider1} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={product_slider2} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={product_slider3} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={product_slider4} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider1">
              200 Ltr Smart Inverter Compressor Single Door Refrigerator,
              Metallic Body- SWAY-RF200E
            </h5>
          </div>
          {/*2nd slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider5} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider6} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider7} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider8} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider1">
              225 Ltr Smart Inverter Compressor Single Door Refrigerator,
              Metallic Body- SWAY-RF225E
            </h5>
          </div>
          {/*3rd slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider9} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider10} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider11} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider12} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider">
              SINFIN Solar Power PCU Compatible 1.5 Ton Solar Split AC
              (Ayurveda), 100% Copper, Most Energy Efficient – Save upto 70%
              Electricity
            </h5>
          </div>
          {/*4th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider13} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider14} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider15} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider16} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider17} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider">
              SINFIN Solar Power PCU Compatible 1.5 Ton Solar Split AC (Magic
              Cool Pro), 100% Copper, Most Energy Efficient – Save upto 70%
              Electricity
            </h5>
          </div>
          {/*5th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider18} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider19} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider20} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider21} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider">
              SINFIN Solar Power PCU Compatible 1.5 Ton Solar Split Hot & Cold
              AC 100% Copper, Most Energy Efficient – Save upto 70% Electricity
            </h5>
          </div>
          {/*6th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider22} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider23} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider24} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider25} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider26} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider2">
              SWAY-AC2.0E Magic Cool 2 Ton Split Air Conditioner
            </h5>
          </div>
          {/*7th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider27} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider28} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider29} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider30} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider2">
              SWAY-AC2.5E Magic Cool 2.5 Ton Split Air Conditioner
            </h5>
          </div>
          {/*8th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider33} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider32} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider31} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider34} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider2">
              SWAY-WM8.0SA 8 KG Semi Automatic Top Load Washing Machine
            </h5>
          </div>
          {/*9th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider35} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider36} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider37} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider38} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider2">
              SWAY-WM8.5SA 8.5 KG Semi Automatic Top Load Washing Machine
            </h5>
          </div>
          {/*10th slider*/}
          <div className="col-md-4 py-5">
            <OwlCarousel className="owl-theme" loop margin={60} items={1}>
              <div class="item">
                <img src={products_slider39} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider40} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider41} id="products1" alt="my-pic" />
              </div>
              <div class="item">
                <img src={products_slider42} id="products1" alt="my-pic" />
              </div>
            </OwlCarousel>
            <h5 id="product-slider2">
              SWAY-WM9.0SA 9 KG Semi Automatic Top Load Washing Machine
            </h5>
          </div>
        </div>
      </div>
      {/*slider section complete*/}
    </>
  );
}
