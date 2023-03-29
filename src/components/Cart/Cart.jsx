import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items :{quantity}</p>
      <p>Total price :${totalPrice}</p>
      <p>Total shipping :${totalShipping}</p>
      <p>Tax :${tax.toFixed(2)}</p>
      <h6>Grand Total :{grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
