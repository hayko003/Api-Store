import React, { useState } from "react";
import "../card/card.css";

function Card({ elem }) {
  const [state, setState] = useState(1);

  const minusState = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      return;
    }
  };

  const plusState = () => {
    setState(state + 1);
  };

  const newPrice = elem.price * state;

  return (
    <div className="card">
      <div className="card_wrapper">
        <img className="card_img" src={elem.image} alt="" />
        <div className="title_desc-wrapper">
          <h1 className="card_title">{elem.title}</h1>
          <p className="card_desc">{elem.category}</p>
          <p className="card_price">{newPrice}$</p>
          <div className="wrapper_rate-price">
            <p className="card_price rate">{elem.rating.rate}</p>
            <svg
              className="rate_star"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="rate_star"
                points="50,5 61,38 95,38 67,58 78,91 50,71 22,91 33,58 5,38 39,38"
                fill="white"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="count_wrap">
            <button onClick={minusState}>-</button>
            <button className="count_btn">{state}</button>
            <button onClick={plusState}>+</button>
          </div>
          <div className="buy_btn-parent">
            <button className="buy_btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
