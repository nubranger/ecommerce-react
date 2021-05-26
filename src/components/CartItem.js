import React, {useContext, useState} from 'react';
import {EshopContext} from "../context/context";

const CartItem = ({item}) => {
    const {handleQuantity} = useContext(EshopContext);


    return (
        <div className="cart__bottom--product">
            <div className="cart__bottom--product-item">
                <img src={item.img[0]} alt=""/>
                <p>{item.title}</p>
            </div>
            <div className="cart__bottom--product-status">
                { item.discount ? <div className="cart__bottom--product-status-discount"> <p>${item.price}</p> <span>${item.discount}</span> </div> : <h6>${item.price}</h6> }

                <select onChange={(e=> handleQuantity({value: e.target.value, id: item.id}))} className="form-select" aria-label="Select quantity">
                    <option defaultValue value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                { item.discount ? <h6>${(item.discount).toFixed(2)}</h6> : <h6>${(item.price).toFixed(2)}</h6> }
            </div>
        </div>
    );
};

export default CartItem;
