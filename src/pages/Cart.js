import React, { useState, useEffect } from "react";
import {notification} from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import Countdown from "antd/lib/statistic/Countdown";

const Cart = () => {
    const [time, setTime] = useState(60);

  const { cart } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (time <= 0) return;
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  });


  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
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

  const countdownHandle = () => {
  return (
    <Countdown title="Countdown" value={60} />
  )
}

notification.config({
    duration: 60,
  });

  const openNotificationWithIcon = type => {
    notification['success']({
      message: 'สั่งซื้อสำเร็จแล้ว',
      description:
        `กรุณาชำระเงิน พ้อมเพย์ 0658678035
          ภายในเวลา ${time} วินาที`,
    });
  };

  return (
    <div className="container-fluid pt-2">
      <div className="row">
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
          <button
            onClick={openNotificationWithIcon}
            className="btn btn-sm btn-warning mt-2"
            disabled={!cart.length}
          >
            Pay Cash by Bank Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
