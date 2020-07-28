import React from "react";
import "./navbarStyles/navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import BicyclesDropdown from "./NavComponents/BicyclesDropdown";
import AccessoriesDropdown from "./NavComponents/AccessoriesDropdown";
import SearchBar from "./NavComponents/SearchBar";
import TopRow from "./NavComponents/TopRow";

const Navbar = () => {
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

  var isLoggedIn = true;

  return (
    <div className="appNavParent" id="appNavParent">
      {/* Top Row */}
      <TopRow />
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
              <b style={{ fontSize: "1.3rem" }}>
                {" "}
                {isLoggedIn ? "Hola, Señorita!!" : " Login/Create Account"}
              </b>
            </li>

            {/* bicycles  */}

            <li className="appDropdown macroDropdown aniList aniList-two isActive">
              <Link onClick={handleAniDrop}>
                <span id="dropBicycles" className="h op">
                  Bicycles
                </span>
              </Link>
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

        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
