import React, {useContext} from 'react';
import {EshopContext} from "../context/context";

const HeaderHeart = () => {
    const {likedItems, handleLikeItems} = useContext(EshopContext);

    return (
        <div className="header__middle-heart-dropdown-items">
            <ul>
                {
                    !likedItems.length
                        ?
                        <h5>List is empty</h5>
                        :
                        likedItems.map((item) => (
                            <li key={item.id}>
                                <img src={item.img[0]} alt={item.title}/>
                                <div>
                                    <h6>{item.title}</h6>
                                    { item.discount ? <div className="items__card-info-discount"> <p>${item.price}</p> <span>${item.discount}</span> </div> : <p>${item.price}</p> }
                                </div>
                                <i onClick={() => handleLikeItems(item.id)} className="bi bi-heart-fill"/>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
};

export default HeaderHeart;
