import React from "react";
import { Link } from "react-router-dom";
const NavLogo = () => {
  return (
    <div className="page-header__logo logo">
      <Link to="/home" className="logo__link">
        <img
          className="logo__img top"
          src="/assets/img/takish-logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default NavLogo;
