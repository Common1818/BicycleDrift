/*eslint-disable */
import React, { useEffect } from "react";
import OurPromise from "./OurPromise";
import { connect } from "react-redux";
import HomeCarousel from "./Carousel";
import ShopOnBD from "./ShopOnBD";
import ShopOnBD2 from "./ShopOnBD2";
import CustomerReviews from "./CustomerReviews";
import FAQ from "./FAQ";
import Shop from "./Shop";
import Contact from "../layout/Contact";
import AboutChawla from "./AboutChawla";
import { getCarousel } from "../../actions/carousel";

const Home = ({ getCarousel, carousel }) => {
  // useEffect(() => {
  //   $(window).scroll(function () {
  //     if (window.scrollY > 600) {
  //       $(".whatsapp-icon a img").addClass("appear");
  //     } else {
  //       $(".whatsapp-icon a img").removeClass("appear");
  //     }
  //   });
  // }, []);
  useEffect(() => {
    getCarousel();
  }, []);
  return (
    <React.Fragment>
      <HomeCarousel carousel={carousel} />
      <OurPromise />
      <Shop />
      <div className="category-card">
        <ShopOnBD />
        <ShopOnBD2 />
      </div>
      <Contact />

      <FAQ />
      <AboutChawla />
      <CustomerReviews />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  carousel: state.carousel.carousel,
});

export default connect(mapStateToProps, { getCarousel })(Home);
