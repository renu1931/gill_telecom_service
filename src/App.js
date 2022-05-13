import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Service from "./components/Service";
import ContactUs from "./components/ContactUs";
import servicesPartOne from "./components/servicesPartOne";
import creativeDesign from "./components/creativeDesign";
import servicePartThree from "./components/servicePartThree";
import serviceFour from "./components/serviceFour";
import serviceFive from "./components/serviceFive";
import serviceSix from "./components/serviceSix";
import Clients from "./components/Clients";
import Products from "./components/Products";

function App() {
  (function($) {
    $(window).on("load", function() {
      $("#js-preloader").addClass("loaded");
    });
  })(window.jQuery);

  return (
    <div className="App">
      <div id="js-preloader" class="js-preloader">
        <div class="preloader"></div>
      </div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Service} />
          <Route
            path="/complete-designing-and-development-website"
            component={servicesPartOne}
          />
          <Route path="/creative-web-design" component={creativeDesign} />
          <Route path="/custom-web-development" component={servicePartThree} />
          <Route path="/multimedia-presentations" component={serviceFour} />
          <Route path="/search-engine-optimisation" component={serviceFive} />
          <Route path="/e-business" component={serviceSix} />
          <Route path="/clients" component={Clients} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
