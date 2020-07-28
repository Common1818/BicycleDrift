import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import NavLogo from "./NavLogo";

const TopRow = () => {
  const handleNav = () => {
    $("#appNavOptions").removeClass("hidden-xs");

    setTimeout(() => {
      $("#appNavOptions").removeClass("hiddenTransform");
    }, 200);
  };

  const handleMobileSearchOpen = () => {
    $(".searchBar").removeClass("hidden-xs");
    setTimeout(() => {
      $(".searchBar").removeClass("hiddenTransform");
    }, 200);
  };

  var isLoggedIn = true;

  return (
    <div className="bdRow topRow graidentBar">
      <NavLogo />
      <div className="appControls">
        <div className="bdRow controlRow">
          <div
            className="segment visible-xs"
            onClick={handleNav}
            id="menuTrigger"
          >
            <div className="bdRow">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/menu-icon-white.svg"
                className="img-responsive center-block menuIcon"
                alt="Menu"
                title="Menu"
              />
            </div>
          </div>

          <div className="segment hidden-xs login" id="appLoginTrigger">
            <div className="bdRow">
              <Link to="/login">
                <img
                  src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/user-account-white.svg"
                  className="img-responsive center-block userIcon"
                  alt="Login"
                  title="Login"
                />{" "}
                <b style={{ fontSize: "1.3rem" }}>
                  {" "}
                  {isLoggedIn ? "Hola, Señorita!!" : " Login/Create Account"}
                </b>
              </Link>
            </div>
          </div>

          <div className="segment support hidden-xs">
            <Link to="/en/help-center">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/support-icon-white.svg"
                className="img-responsive center-block userIcon"
                alt="Support"
                title="Support"
              />{" "}
              Support
            </Link>
          </div>

          <div
            className="segment visible-xs"
            onClick={handleMobileSearchOpen}
            id="mobileSearchTrigger"
          >
            <div className="bdRow">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/search-icon-white.svg"
                className="img-responsive center-block userIcon"
                alt="Search"
                title="Search"
              />
            </div>
          </div>

          <div className="segment cart" id="appCartIcon">
            <Link to="/en/cart">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/shopping-cart-white.svg"
                className="img-responsive center-block menuIcon"
                alt="Cart"
                title="Cart"
              />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRow;
