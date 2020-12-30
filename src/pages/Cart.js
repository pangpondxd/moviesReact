import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";

const Cart = ({history}) => {
    const {cart} = useSelector((state) => ({...state}));

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    // if(cart.length > 0) {
    //     console.log(cart)
    //     console.log('cart customize ---->',cart[0].isCustomize)
    // }

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
                <ProductCardInCheckout key={p.id} p={p}/>
            ))}
        </table>
    );

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
                    <hr/>
                    <p>Products</p>
                    {cart.map((c, i) => (
                        <div key={i}>
                            <p>
                                {c.title} x {c.count} = {c.price * c.count}
                            </p>
                        </div>
                    ))}
                    <hr/>
                    Total: <b>{getTotal()}</b>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
