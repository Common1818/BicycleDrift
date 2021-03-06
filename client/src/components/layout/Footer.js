import React from "react";
import footerLogo from "./footerLogo.PNG";
import { Link } from "react-router-dom";
import $ from "jquery";
import payment from "./payment.png";
import "./css/footerStyles/Footer.css";

const Footer = () => {
  $(document).ready(function () {
    var accordionOpen = $(".first_depth p");
    accordionOpen.on("click", function () {
      accordionOpen.closest(".first_depth").removeClass("on");
      $(this).closest(".first_depth").addClass("on");
    });
  });
  return (
    <footer>
      <div className="wrap">
        <div className="upper_side contents">
          <ul className="flex">
            <li className="first_depth">
              <p className="title">
                Shop on BicycleDrift <i className="fa fa-shopping-basket"></i>{" "}
              </p>
              <ul className="second_depth">
                <li className="white">Bikes</li>

                <li>
                  <Link
                    onClick={() => {
                      $("html, body").animate({ scrollTop: 10 }, 500);
                    }}
                    to="/products/bikes"
                  >
                    All Bikes
                  </Link>
                </li>
              </ul>
              <ul className="second_depth">
                <li className="white">Accessories</li>
                <li>
                  <Link
                    onClick={() => {
                      $("html, body").animate({ scrollTop: 10 }, 500);
                    }}
                    to="/products/accessories"
                  >
                    All Accessories
                  </Link>
                </li>
              </ul>
            </li>

            <li className="first_depth">
              <p className="title">
                SUPPORT <i className="fa fa-headset"></i>{" "}
              </p>
              <ul className="second_depth">
                <li>
                  <Link to="/myorders"> Order Status</Link>
                </li>
                <li>
                  <a href="mailto:bicyclesdrift@gmail.com">
                    Write to Us <i className="fa fa-pen"></i>{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="first_depth">
              <p className="title">
                CONTACT <i className="fa fa-phone"></i>{" "}
              </p>
              <p>Shop Timing : Mon - Sun 9:00am - 9:00 pm IST </p>
              <p>Service Timing : Mon - Sat 9:00am - 4:30 pm IST</p>

              <ul className="second_depth">
                <li>
                  <a href="tel:+919212403104">Ph: +91 92124 03104</a>
                </li>
                <li>
                  <em className="white">
                    Mail <i className="fa fa-envelope-open"></i>{" "}
                  </em>
                  <a href="mailto:bicyclesdrift@gmail.com">
                    bicylesdrift@gmail.com <i className="fa fa-pen"></i>{" "}
                  </a>
                </li>
                <li>
                  <ul>
                    <li>
                      <em className="white">
                        Address <i className="fa fa-map-marker-alt"></i>{" "}
                      </em>
                      <a
                        href="
                     https://www.google.com/maps/place/Vd+chawla+cycle+store/@28.3807038,77.2928859,17z/data=!3m1!4b1!4m5!3m4!1s0x390cdc23ac9b011f:0x18128ca1fa136374!8m2!3d28.3807038!4d77.2950746
                     "
                      >
                        <p>
                          Address: vd chawla cycle store Add:2A/117New
                          Industrial Township 2, near india college, Faridabad,
                          Haryana 121001
                        </p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="lower_side contents">
          <ul className="flex">
            <li className="logo">
              <img src={footerLogo} alt="" />
            </li>
          </ul>
        </div>
        <div className="payment">
          <span>IDFC bank Financing Available</span>
          <br />
          <img src={payment} alt="" />
        </div>
      </div>
      <div className="koshish" style={{ padding: "10px", textAlign: "center" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/bihani.priya"
        >
          {" "}
          <span className="bykoshish">Website by : Koshish </span>
        </a>
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/bihani.priya"
        >
          {" "}
          <img
            style={{ width: "20px" }}
            src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
            alt=""
          />
        </a>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/gkartik18"
        >
          {" "}
          <img
            style={{ width: "20px" }}
            src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
