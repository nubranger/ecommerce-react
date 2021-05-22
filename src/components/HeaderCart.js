import React, {useContext} from 'react';
import {EshopContext} from "../context/context";

const HeaderCart = () => {
    const {cartList, handleCartItems} = useContext(EshopContext);

    return (
        <div className="header__middle-bag-dropdown-items">
            <ul>
                {
                    !cartList.length
                        ?
                        <h5>Cart is empty</h5>
                        :
                        cartList.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.title}/>
                                <div>
                                    <h6>{item.title}</h6>
                                    <p>$ {item.price}</p>
                                </div>
                                <i onClick={() => handleCartItems(item.id)}  className="bi bi-x"/>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
};

export default HeaderCart;
