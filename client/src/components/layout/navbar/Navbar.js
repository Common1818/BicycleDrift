/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./NavComponents/Logo.jpg";
import SearchBar from "./NavComponents/SearchBar";
import TopRow from "./NavComponents/TopRow";
import { logout } from "../../../actions/auth";

import "./navbarStyles/navbar.css";
import $ from "jquery";

// redux
import { connect } from "react-redux";
//

const Navbar = ({ auth, logout }) => {
  const { isAuthenticated } = auth;
  const { user } = auth;
  // =-=--=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==--==--=-=-=-=-==--=-=

  // const handleAniDrop = () => {
  //   console.log("toggle");
  //   $(".subMenuContainer").toggleClass("hideOnlyMobile");
  // };

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
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              className="img-responsive center-block"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 174.239 174.239"
              xmlSpace="preserve"
            >
              <path
                d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047
	c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077
	L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802
	c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077
	l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </button>

          <div className="topNavLogo visible-xs">
            <img
              src={Logo}
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
                {isLoggedIn === true
                  ? `Hey, ${user && user.firstname} !!`
                  : " Login/Create Account"}
              </Link>
            </li>

            {/* bicycles  */}
            {isLoggedIn ? (
              <li className="appLink aniList aniList-six">
                <Link to="/myorders">
                  <span className="h">My Orders</span>
                </Link>
              </li>
            ) : null}

            <li className="appDropdown macroDropdown aniList aniList-two isActive">
              <Link
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 1000);
                  handleCloseNav();
                }}
                to="/products/bikes"
              >
                <span id="dropBicycles" className="h op">
                  Bicycles
                </span>
              </Link>
              {/* <BicyclesDropdown /> */}
            </li>

            {/* bicycles */}

            {/* Accesssories */}
            <li className="appDropdown macroDropdown aniList aniList-four">
              <Link
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 1000);
                  handleCloseNav();
                }}
                to="/products/accessories"
              >
                <span id="dropAccessories" className="h op">
                  Accessories
                </span>
              </Link>
              {/* <AccessoriesDropdown /> */}
            </li>
            <li className="appDropdown macroDropdown aniList aniList-four">
              <Link
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 1000);
                  handleCloseNav();
                }}
                to="/products/spares"
              >
                <span id="dropAccessories" className="h op">
                  Spares
                </span>
              </Link>
              {/* <AccessoriesDropdown /> */}
            </li>

            {/* Accessories */}

            <li className="appLink aniList aniList-eight visible-xs">
              <a
                onClick={() => {
                  $("html, body").animate(
                    { scrollTop: $(document).height() },
                    1000
                  );
                  handleCloseNav();
                }}
              >
                <span className="h">Customer Support</span>
              </a>
            </li>
            {!isAuthenticated ? null : (
              <li className="appLink aniList aniList-eight visible-xs">
                <a onClick={logout} href="/">
                  <span className="h">Logout</span>
                </a>
              </li>
            )}
          </ul>
        </div>
        {auth.isAdmin ? <Link to="/admin">admin</Link> : null}
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
