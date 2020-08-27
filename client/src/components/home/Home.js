import React, { useEffect } from "react";
import OurPromise from "./OurPromise";
import $ from "jquery";
import HomeCarousel from "./Carousel";
import ShopOnBD from "./ShopOnBD";
import CustomerReviews from "./CustomerReviews";
import FAQ from "./FAQ";
import Shop from "./Shop";
import Contact from "../layout/Contact";

const Home = () => {
  // useEffect(() => {
  //   $(window).scroll(function () {
  //     if (window.scrollY > 600) {
  //       $(".whatsapp-icon a img").addClass("appear");
  //     } else {
  //       $(".whatsapp-icon a img").removeClass("appear");
  //     }
  //   });
  // }, []);
  return (
    <React.Fragment>
      <HomeCarousel />
      <OurPromise />
      <Shop />
      <ShopOnBD />
      <Contact />
      <FAQ />
      <CustomerReviews />
    </React.Fragment>
  );
};

export default Home;
