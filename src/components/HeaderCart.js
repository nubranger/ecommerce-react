import React from 'react';
import {useCartContext} from "../context/cart_context";

const HeaderCart = () => {
    const {cart, removeItem} = useCartContext();

    return (
        <div className="header__middle-bag-dropdown-items">
            <ul>
                {
                    !cart.length
                        ?
                        <h5>Cart is empty</h5>
                        :
                        cart.map((item) => (
                            <li key={item.id}>
                                <img src={item.img[0]} alt={item.title}/>
                                <div>
                                    <h6>{item.title}</h6>
                                    {item.discount ? <div className="items__card-info-discount"><p>${item.price}</p>
                                        <span>${item.discount}</span></div> : <p>${item.price}</p>}
                                </div>
                                <i onClick={() => removeItem(item.id)} className="bi bi-x"/>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
};

export default HeaderCart;
