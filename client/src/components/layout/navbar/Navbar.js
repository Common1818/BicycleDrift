import React from "react";
import { Link } from "react-router-dom";

import BicyclesDropdown from "./NavComponents/BicyclesDropdown";
import AccessoriesDropdown from "./NavComponents/AccessoriesDropdown";
import SearchBar from "./NavComponents/SearchBar";
import TopRow from "./NavComponents/TopRow";

import "./navbarStyles/navbar.css";
import $ from "jquery";

// redux
import { connect } from "react-redux";
//

const Navbar = ({ auth }) => {
  const { isAuthenticated } = auth;
  const { user } = auth;
  // =-=--=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==--==--=-=-=-=-==--=-=

  const handleAniDrop = () => {
    console.log("toggle");
    $(".subMenuContainer").toggleClass("hideOnlyMobile");
  };

  const handleCloseNav = () => {
    $("#appNavOptions").addClass("hiddenTransform");
    setTimeout(() => {
      $("#appNavOptions").addClass("hidden-xs");
    }, 300);
  };

  //-=-=--=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==--==--=-=-=-=-==--=-=

  var isLoggedIn = isAuthenticated;

  return (
    <div className="appNavParent" id="appNavParent">
      {/* Top Row */}
      <TopRow isLoggedIn={isAuthenticated} user={user} />
      {/* Top Row */}
      <div className="bdRow topRow menuRow">
        <div
          className="appNavOptions hidden-xs hiddenTransform"
          id="appNavOptions"
        >
          <button
            className="defaultButton secondaryBlack visible-xs closerButton"
            onClick={handleCloseNav}
            id="closeSearchBar"
          >
            <img
              src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/buttons/x-mark-black.svg"
              className="img-responsive center-block"
              alt="Close"
              title="Close"
            />
          </button>

          <div className="topNavLogo visible-xs">
            <img
              src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
              className="img-responsive center-block"
              alt="bicycledrift"
              title="bicycledrift"
            />
          </div>

          <ul className="list-unstyled topLevelNav">
            <li
              className="userAccount aniList aniList-one visible-xs hide"
              id="mobileAppLoginTrigger"
            >
              <Link
                to="/login"
                onClick={handleCloseNav}
                style={{ fontSize: "1.3rem" }}
              >
                {" "}
                {isLoggedIn == true
                  ? `Hey, ${user && user.firstname} !!`
                  : " Login/Create Account"}
              </Link>
            </li>

            {/* bicycles  */}

            <li className="appDropdown macroDropdown aniList aniList-two isActive">
              <a onClick={handleAniDrop}>
                <span id="dropBicycles" className="h op">
                  Bicycles
                </span>
              </a>
              <BicyclesDropdown />
            </li>

            {/* bicycles */}

            {/* Accesssories */}
            <li className="appDropdown macroDropdown aniList aniList-four">
              <a onClick={handleAniDrop}>
                <span id="dropAccessories" className="h op">
                  Accessories
                </span>
              </a>
              <AccessoriesDropdown />
            </li>

            {/* Accessories */}
            <li className="appLink aniList aniList-six">
              <Link to="/en/woc">
                <span className="h">Reviews</span>
              </Link>
            </li>

            <li className="appLink aniList aniList-eight visible-xs">
              <Link to="/en/help-center">
                <span className="h">Customer Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/admin">admin</Link>
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
