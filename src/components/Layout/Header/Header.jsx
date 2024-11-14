import React from "react";
import logo from "../../../assets/images/fav-medical.png";
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} width={60} height={60} alt="logo" />
        <div className="header-title">Geo User Admin Dashboard</div>
      </div>
    </header>
  );
};
export default Header;
