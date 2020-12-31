import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import "../cart.css";
const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  const getTotal = () => {
    if(cart.length > 0 && cart.length <= 3)
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
    if(cart.length > 3 && cart.length <= 5)
    return cart.reduce((currentValue, nextValue) => {
      return (currentValue + nextValue.count * nextValue.price) - (nextValue.count * nextValue.price * 0.1);
    }, 0);
    if(cart.length > 5)
    return cart.reduce((currentValue, nextValue) => {
      return (currentValue + nextValue.count * nextValue.price) - (nextValue.count * nextValue.price * 0.2);
    }, 0);
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p.id} p={p} />
      ))}
    </table>
  );

  function countDown() {
    let secondsToGo = 60;
    const modal = Modal.warn({
      title: "ทำการชำระเงิน",
      okText: "Cancel",
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      if (secondsToGo === 0) {
      console.log("🚀 ~ file: Cart.js ~ line 57 ~ timer ~ secondsToGo", secondsToGo)
        const modalSuccess = Modal.warn({
          title: "หมดเวลาการชำระเงิน",
        });
        modalSuccess.update({ content: "", zIndex: 1000 });
      } else {
        modal.update({
          okText: "Cancel",
          content: `กรุณาชำระเงิน พ้อมเพย์ 0658678035  ภายในเวลา ${secondsToGo} วินาที.`,
        });
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
  const style = {
      paddingTop: '4rem'
  }
  return (
    <div className="container-fluid pt-2">
      <div className="row" style={style}>
        <div className="col-md-8">
          <h4>Cart / {cart.length} Product</h4>

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = {c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>{getTotal()}</b>
          <hr />
          <Button type="primary" onClick={countDown}>
            PAY CASH BY BANK TRANSFER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
