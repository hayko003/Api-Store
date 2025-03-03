import React from "react";
import { data } from "../../db/db";
import "../card/card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, price: this.props.elem.price };
    this.minus = this.minus.bind(this);
    this.plus = this.plus.bind(this);
    // this.price = {price : this.props.elem.price}
  }

  minus() {
    // this.setState({ count: --this.state.count });
    // this.setState({price: --this.props.elem.price})

      this.setState()
  }

  plus() {
    // this.setState({ count: ++this.state.count});
    // this.setState({price: this.props.elem.price  })

  }

  render() {
    return (
      <div className="card">
        <div className="card_wrapper">
          <img className="card_img" src={this.props.elem.image} alt="" />
          <div className="title_desc-wrapper">
            <h1 className="card_title">{this.props.elem.title}</h1>
            <p className="card_desc">{this.props.elem.category}</p>
            <p className="card_price">{this.props.elem.price}$</p>
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
