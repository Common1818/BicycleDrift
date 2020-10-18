import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";

const NavLogo = () => {
  return (
    <div className="appIcon">
      <Link to="/">
        <img
          src={Logo}
          className="img-responsive center-block visible-xs"
          alt="bicycledrift.com"
          title="bicycledrift.com"
        />

        <img
          src={Logo}
          className="img-responsive center-block hidden-xs"
          alt="bicycledrift.com"
          title="bicycledrift.com"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
