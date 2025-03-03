import React from "react";
import { data } from "../../db/db";
import "../card/card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.minus = this.minus.bind(this);
    this.plus = this.plus.bind(this);
  }

  minus() {
    this.setState((prevState) => {
      const newCount = prevState.count -1 ;
      if (prevState.count < 1) {
        return 
      } 
      return { count: newCount };
    });
  }

  plus() {
      this.setState((prevState) => {
        const newCount = prevState.count + 1;
        return { count: newCount};
      });
    }
    
    render() {
    const newPrice = this.props.elem.price * this.state.count;
    return (
      <div className="card">
        <div className="card_wrapper">
          <img className="card_img" src={this.props.elem.image} alt="" />
          <div className="title_desc-wrapper">
            <h1 className="card_title">{this.props.elem.title}</h1>
            <p className="card_desc">{this.props.elem.category}</p>
            <p className="card_price">{newPrice}$</p>
            <div className="count_wrap">
              <button onClick={this.minus}>-</button>
              <button className="count_btn">{this.state.count}</button>
              <button onClick={this.plus}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
