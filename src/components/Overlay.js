import React, { Component } from 'react';

export default class Overlay extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="drawer">
          <h3>
            My Bag, <span> 3 items</span>
          </h3>
          <div className="cartItem">
            <div className="cartItem__info">
              <div>
                {' '}
                <p className="item__name">Apollo</p>
                <p className="item__name">Runing Short</p>
                <div className="product__currency">
                  {/* <img src={require('./assets/currency.jpg')} alt="currency" /> */}
                  <span>50.00</span>
                </div>
                <p className="item__size">Size:</p>
                <ul>
                  <li>
                    <a href="#">
                      <span>XS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>S</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>M</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>L</span>
                    </a>
                  </li>
                </ul>
                <p className="item__color">Color:</p>
                <div className="color__list">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>
              <div className="buttons">
                <button className="addItem">+</button>
                <button className="removeItem">-</button>
              </div>
              <div className="item__img">
                <img src={require('../assets/Product 1.jpg')} alt="product 1" />
              </div>
            </div>
          </div>
          <div className="cartItem">
            <div className="cartItem__info">
              <div>
                {' '}
                <p className="item__name">Apollo</p>
                <p className="item__name">Runing Short</p>
                <div className="product__currency">
                  {/* <img src={require('./assets/currency.jpg')} alt="currency" /> */}
                  <span>50.00</span>
                </div>
                <p className="item__size">Size:</p>
                <ul>
                  <li>
                    <a href="#">
                      <span>XS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>S</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>M</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>L</span>
                    </a>
                  </li>
                </ul>
                <p className="item__color">Color:</p>
                <div className="color__list">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
              </div>
              <div className="buttons">
                <button className="addItem">+</button>
                <button className="removeItem">-</button>
              </div>
              <div className="item__img">
                <img src={require('../assets/Product 1.jpg')} alt="product 1" />
              </div>
            </div>
          </div>
          <div className="cart__total">
            <ul>
              <li>
                {' '}
                <span>Total</span>
                <span>
                  {' '}
                  <img src={require('../assets/currency.jpg')} alt="currency" />
                  200.00
                </span>
              </li>
            </ul>

            <div>
              <button>View bag</button>
              <button>Check out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
