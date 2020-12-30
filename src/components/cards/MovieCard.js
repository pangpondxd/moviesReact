import React from 'react'
import {Card, notification} from 'antd'
import { useDispatch } from "react-redux";
import _ from 'lodash'

const {Meta} = Card

const MovieCard = ({ product }) => {
    const {title, vote_average, poster_path} = product
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        // create cart array
        let cart = [];
        if (typeof window !== "undefined") {
          // if cart is in local storage GET it
          if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
          }
          // push new product to cart
          cart.push({
            ...product,
            count: 1,
          });
          // remove duplicates
          let unique = _.uniqWith(cart, _.isEqual);
          // save to local storage
          // console.log('unique', unique)
          localStorage.setItem("cart", JSON.stringify(unique));
          // show tooltip
    
          // add to reeux state
          dispatch({
            type: "ADD_TO_CART",
            payload: unique,
          });
          // show cart items in side drawer
          dispatch({
            type: "SET_VISIBLE",
            payload: true,
          });
        }
        openNotificationWithIcon()
      };

      const openNotificationWithIcon = type => {
        notification['success']({
          message: 'เพิ่มหนังลงในตะกร้าสำเร็จ',
          description:
            `${product.title} ได้ถูกเพิ่มในตะกร้าแล้ว`,
        });
      };


    return (
        <Card
        hoverable
        onClick={handleAddToCart}
        style={{ width: 240 }}
        cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500/` + poster_path} />}
      >
        <Meta title={title} description={vote_average} />
      </Card>
    )
}

export default MovieCard