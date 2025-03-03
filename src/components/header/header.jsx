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
            <li>Hello, sign in Account</li>
            <li>Returns & Orders</li>
            <li><img style={{width: 30}} src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg" alt="" srcset="" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
