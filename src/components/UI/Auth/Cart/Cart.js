import React from 'react';
import './Cart.css';

function Cart() {
  return (
    <div className="cart">
      <div className="cart_body">
        <div className="cart_header">
          <h3 className="cart_header-title">Already Member</h3>
        </div>
        <div className="cart_main">
          <input
            className="cart_input"
            type="text"
            placeholder="Enter your Token"
          />
          <button className="cart_btn">Submit</button>
        </div>
      </div>
      <a
        href="https://gitlab.com/-/profile/personal_access_tokens"
        className="cart_get-token"
      >
        Don't have an access token yet?
      </a>
    </div>
  );
}

export default Cart;
