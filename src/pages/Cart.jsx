import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="cart__title">
                Cart
              </h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quanity">Quanity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="" alt="" className="cart__book--img" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">

                      </span>
                      <span className="cart__book--price">

                      </span>
                      <button className="cart__book--remove">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} className="cart__input" />
                  </div>
                  <div className="cart__total">

                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>$10.00</span>
              </div>
              <button className="btn btn__checkout no-cursor"
              onClick={() => alert('not done yet :(')}>
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
