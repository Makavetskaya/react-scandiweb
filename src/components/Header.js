import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <ul className="header__catalog">
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
        </ul>
        <a className="header__logo">
          <img src={require('../assets/a-logo.jpg')} alt="logo" />
        </a>
        <ul className="header__nav">
          <li>
            <a href="">
              <img src={require('../assets/currency.jpg')} alt="currency" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={require('../assets/cart.jpg')} alt="cart" />
              <div className="quantity">2</div>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
