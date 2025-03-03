import React from "react";
import "../header/header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          className="lacoste_logo"
          src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
        />
        <input className="header_input" type="text" />
        <div className="header_wrapper">
          <ul>
            <li>Hello, sign in Account & Lists Returns & Orders 0 Cart</li>
            <li>Returns & Orders</li>
            <li>KIDS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
