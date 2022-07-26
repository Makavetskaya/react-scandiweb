import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card__img"
          src={require('../assets/product.jpg')}
          alt="img-product"
        />
        <p className="card__name">Apollo Runing Short</p>
        <div className="card__currency">
          <img src={require('../assets/currency.jpg')} alt="currency" />
          <span>50.00</span>
        </div>
      </div>
    );
  }
}
