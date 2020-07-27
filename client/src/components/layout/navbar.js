import React from "react";
import "./navbarStyles/navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const Navbar = () => {
  // =-=--=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==--==--=-=-=-=-==--=-=

  const handleNav = () => {
    $("#appNavOptions").removeClass("hidden-xs");

    setTimeout(() => {
      $("#appNavOptions").removeClass("hiddenTransform");
    }, 200);
  };

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

  const handleMobileSearchOpen = () => {
    $(".searchBar").removeClass("hidden-xs");
    setTimeout(() => {
      $(".searchBar").removeClass("hiddenTransform");
    }, 200);
  };

  const closeSearchNav = () => {
    $(".searchBar").addClass("hiddenTransform");
    setTimeout(() => {
      $(".searchBar").addClass("hidden-xs");
    }, 300);
  };

  //-=-=--=-=-=-=-=-=-=-==-=-=-=-=--=-=-=-=-=-=-==--=-=-=-=-=-=-=-=-==--==--=-=-=-=-==--=-=

  var isLoggedIn = true;

  const Brands = [
    "Firefox",
    "Montra",
    "Hero",
    "Hero Electric",
    "Giant",
    "Trek",
    "Btwin",
    "Hercules",
    "MachCity",
  ];

  const Users = [
    "Adults",
    "Men",
    "Women",
    "Kids",
    "Boy Kids",
    "Girl Kids",
    "Toddlers",
  ];

  const FrameTypes = [
    "Alloy",
    "ALuminum",
    "Carbon Fiber",
    "Steel",
    "Chromoly",
    "Plastic",
    "Others",
  ];

  const Category = ["City", "Mountain", "Hybrid", "Highway", "Street"];

  return (
    <div className="appNavParent" id="appNavParent">
      <div className="bdRow topRow graidentBar">
        <div className="appIcon">
          <a href="/">
            <img
              src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
              className="img-responsive center-block visible-xs"
              alt="bicycledrift.com"
              title="bicycledrift.com"
            />

            <img
              src="https://www.svgrepo.com/show/303611/giant-bicycles-logo.svg"
              className="img-responsive center-block hidden-xs"
              alt="bicycledrift.com"
              title="bicycledrift.com"
            />
          </a>
        </div>
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
              <a href="/en/help-center">
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

            <div className="segment cart" id="appCartIcon">
              <a href="/en/cart">
                <img
                  src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/navigation/shopping-cart-white.svg"
                  className="img-responsive center-block menuIcon"
                  alt="Cart"
                  title="Cart"
                />
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>

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

            <li className="appDropdown macroDropdown aniList aniList-two isActive">
              <a onClick={handleAniDrop}>
                <span id="dropBicycles" className="h op">
                  Bicycles
                </span>
              </a>
              <div className="subMenuContainer hideOnlyMobile ">
                <ul className="list-unstyled subList bdRow">
                  <li className="appDropdown">
                    <span className="h byUsers hideOnlyMobile">By Users</span>
                    <ul className="list-unstyled linksList hideOnlyMobile">
                      {Users &&
                        Users.map((user) => {
                          return (
                            <li>
                              <a href="/en/bicycles/women">{user}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                  <li className="appDropdown">
                    <span className="h byCat hideOnlyMobile">
                      By Categories
                    </span>
                    <ul className="list-unstyled linksList hideOnlyMobile">
                      {Category &&
                        Category.map((category) => {
                          return (
                            <li>
                              <a href="/en/bicycles/city">{category}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                  <li className="appDropdown displaySubInline">
                    <span className="h byBrand hideOnlyMobile">By Brands</span>
                    <ul className="list-unstyled linksList hideOnlyMobile">
                      {Brands &&
                        Brands.map((brand) => {
                          return (
                            <li>
                              <a href="/en/bicycles/firefox">{brand}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                  <div className="clearfix hidden-xs"></div>
                  <li className="appDropdown">
                    <span className="h byFrame hideOnlyMobile">
                      By Frame Material
                    </span>
                    <ul className="list-unstyled linksList hideOnlyMobile">
                      {FrameTypes &&
                        FrameTypes.map((type) => {
                          return (
                            <li>
                              <a href="/en/bicycles/alloy-frame">{type}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </li>

                  <li className="appLink allLink">
                    <span className="h">
                      <a href="/en/bicycles">
                        <span className="subtext hidden-xs">
                          Not sure and <br />
                          like to see our full range?
                        </span>
                        <span className="pseudoButton">View All Bicycles</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="appDropdown macroDropdown aniList aniList-four">
              <a onClick={handleAniDrop}>
                <span id="dropAccessories" className="h op">
                  Accessories
                </span>
              </a>
              <div className="subMenuContainer hideOnlyMobile">
                <ul className="list-unstyled subList">
                  <li className="appDropdown">
                    <span className="h byCatTwo">For The Bicycle</span>
                    <ul className="list-unstyled linksList bdRow hideOnlyMobile">
                      <li>
                        <a href="/en/accessories/bags-and-car-racks">
                          Bags and Car Racks
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/bells-and-horns">
                          Bells and Horns
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/bottles-and-bottle-cages">
                          Bottles and Bottle Cages
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/components-and-spares">
                          Components and Spares
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/gps-and-cyclocomputers">
                          GPS and Cyclocomputers
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/lights">Lights</a>
                      </li>
                      <li>
                        <a href="/en/accessories/locks">Locks</a>
                      </li>
                      <li>
                        <a href="/en/accessories/maintenance-and-care">
                          Maintenance and Care
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/mudguards-and-protection">
                          Mudguards and Protection
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/others">Others</a>
                      </li>
                      <li>
                        <a href="/en/accessories/pumps">Pumps</a>
                      </li>
                      <li>
                        <a href="/en/accessories/stands">Stands</a>
                      </li>
                      <li>
                        <a href="/en/accessories/tires-and-tubes">
                          Tires & Tubes
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/tools">Tools</a>
                      </li>
                      <li>
                        <a href="/en/accessories/trainers">Trainers</a>
                      </li>
                      <li>
                        <a href="/en/accessories/wheels">Wheels</a>
                      </li>
                    </ul>
                  </li>

                  <li className="appDropdown">
                    <span className="h byCatTwo">For The Rider</span>
                    <ul className="list-unstyled linksList bdRow hideOnlyMobile">
                      <li>
                        <a href="/en/accessories/backpacks">Backpacks</a>
                      </li>
                      <li>
                        <a href="/en/accessories/compression-and-inner-wear">
                          Compression and Inner Wear
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/eyewear">Eyewear</a>
                      </li>
                      <li>
                        <a href="/en/accessories/footwear">Footwear</a>
                      </li>
                      <li>
                        <a href="/en/accessories/gloves">Gloves</a>
                      </li>
                      <li>
                        <a href="/en/accessories/helmets">Helmets</a>
                      </li>
                      <li>
                        <a href="/en/accessories/jerseys">Jerseys</a>
                      </li>
                      <li>
                        <a href="/en/accessories/recovery-and-body-care">
                          Recovery and Body Care
                        </a>
                      </li>
                      <li>
                        <a href="/en/accessories/shorts">Shorts</a>
                      </li>
                      <li>
                        <a href="/en/accessories/t-shirts">T-shirts</a>
                      </li>
                    </ul>
                  </li>

                  <li className="appDropdown displaySubInline">
                    <span className="h byBrandTwo">By Brands</span>
                    <ul className="list-unstyled linksList hideOnlyMobile">
                      <li>
                        <a href="/en/accessories/2go">2Go</a>
                      </li>
                      <li>
                        <a href="/en/accessories/apace">Apace</a>
                      </li>
                      <li>
                        <a href="/en/accessories/cannondale">Cannondale</a>
                      </li>
                      <li>
                        <a href="/en/accessories/castelli">Castelli</a>
                      </li>
                      <li>
                        <a href="/en/accessories/cateye">Cateye</a>
                      </li>
                      <li>
                        <a href="/en/accessories/firefox">Firefox</a>
                      </li>
                      <li>
                        <a href="/en/accessories/flr">FLR</a>
                      </li>
                      <li>
                        <a href="/en/accessories/garmin">Garmin</a>
                      </li>
                      <li>
                        <a href="/en/accessories/giant">Giant</a>
                      </li>
                      <li>
                        <a href="/en/accessories/hercules">Hercules</a>
                      </li>
                      <li>
                        <a href="/en/accessories/hutchinson">Hutchinson</a>
                      </li>
                      <li>
                        <a href="/en/accessories/merida">Merida</a>
                      </li>
                      <li>
                        <a href="/en/accessories/muc-off">Muc Off</a>
                      </li>
                      <li>
                        <a href="/en/accessories/niterider">Niterider</a>
                      </li>
                      <li>
                        <a href="/en/accessories/wahoo">Wahoo</a>
                      </li>
                      <li>
                        <a href="/en/accessories/xmr">XMR</a>
                      </li>
                    </ul>
                  </li>

                  <li className="appLink allLink">
                    <span className="h">
                      <a href="/en/accessories">
                        <span className="subtext hidden-xs">
                          Like to see our full <br />
                          collection of Accessories?
                        </span>
                        <span className="pseudoButton">
                          View All Accessories
                        </span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="appLink aniList aniList-six">
              <a href="/en/woc">
                <span className="h">Reviews</span>
              </a>
            </li>

            <li className="appLink aniList aniList-eight visible-xs">
              <a href="/en/help-center">
                <span className="h">Customer Support</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="searchBar hidden-xs hiddenTransform" id="searchBar">
          <button
            className="defaultButton secondaryBlack visible-xs closerButton"
            onClick={closeSearchNav}
            id="closeSearchBar"
          >
            <img
              src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/buttons/x-mark-black.svg"
              className="img-responsive center-block"
              alt="Close"
              title="Close"
            />
          </button>
          <form
            className="form searchForm"
            id="appNavSearchForm"
            autoComplete="off"
          >
            <div className="form-group positionRelative">
              <input
                style={{ borderRadius: "20px" }}
                type="text"
                className="defaultInput"
                id="appSearch"
                name="appSearch"
                placeholder="Search on CycleDrift"
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
