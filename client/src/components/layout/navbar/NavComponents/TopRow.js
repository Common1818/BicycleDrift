/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import NavLogo from "./NavLogo";
import { connect } from "react-redux";
import { logout } from "../../../../actions/auth";

const TopRow = ({ isLoggedIn, user, logout, cartItems }) => {
  const localCartItems =
    (JSON.parse(localStorage.getItem("cart")) &&
      JSON.parse(localStorage.getItem("cart")).length) ||
    0;

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

  return (
    <div className="bdRow topRow graidentBar">
      <NavLogo />
      <div className="appControls">
        <div className="bdRow controlRow">
          <>
            {isLoggedIn === true ? (
              <div className="segment support hidden-xs">
                <a href="/" onClick={logout}>
                  <img
                    src="https://www.svgrepo.com/show/181104/logout-exit.svg"
                    className="img-responsive center-block userIcon"
                    alt="Support"
                    title="Support"
                  />{" "}
                  Logout
                </a>
              </div>
            ) : null}
          </>
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
                <span style={{ fontSize: "1.3rem" }}>
                  {" "}
                  {isLoggedIn === true
                    ? `Hey, ${user && user.firstname} !!`
                    : " Login/Create Account"}
                </span>
              </Link>
            </div>
          </div>

          <div className="segment support hidden-xs">
            <a
              onClick={() => {
                $("html, body").animate(
                  { scrollTop: $(document).height() },
                  1000
                );
              }}
            >
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/support-icon-white.svg"
                className="img-responsive center-block userIcon"
                alt="Support"
                title="Support"
              />{" "}
              Support
            </a>
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

          <div className="segment cart shopping-cart" id="appCartIcon">
            <Link to="/mycart">
              <img
                src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/shopping-cart-white.svg"
                className="img-responsive center-block menuIcon"
                alt="Cart"
                title="Cart"
              />{" "}
              {localCartItems === 0 ? null : cartItems.length === 0 ? (
                <sup>{localCartItems}</sup>
              ) : (
                <sup>{cartItems.length}</sup>
              )}
              <div className="cart-items"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { logout })(TopRow);
