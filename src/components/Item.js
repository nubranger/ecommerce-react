import React, {useContext, useState} from 'react';
import {Col} from "reactstrap";
import {EshopContext} from "../context/context";

const Item = ({grid, item}) => {
    const {handleLikeItems, handleCartItems, products, likedItems, cartList} = useContext(EshopContext);
    const [selectImage, setSelectImage] = useState(0);

    return (
                <Col lg={grid}>
                    <div className={item.amount === 0 ? "items__card outofstock" : "items__card"}>
                        {item.amount === 0 && <h3>Out of stock</h3>}
                        <img className="items__card-image" src={item.img[selectImage]} alt={item.title}/>
                        <div className="items__card-images">
                            {
                                item.img.map((images, index) => {
                                    console.log("render images")
                                    return (
                                        <div onMouseEnter={()=> setSelectImage(index)} key={index}>
                                            <img src={images} alt=""/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="items__card-info">
                            <h6>{item.title}</h6>
                            { item.discount ? <div className="items__card-info-discount"> <p>${item.price}</p> <span>${item.discount}</span> </div> : <p>${item.price}</p> }
                        </div>
                        <div className="items__card-add">
                            <i
                                onClick={() => handleLikeItems(item.id)}
                                className={likedItems.some((liked) => liked.id === item.id) ? "bi bi-heart-fill" : "bi bi-heart"}
                            />
                            <i
                                onClick={() => handleCartItems(item.id)}
                                className={cartList.some((cartItem) => cartItem.id === item.id) ? "bi bi-cart-check" : "bi bi-cart-plus"}
                            />
                        </div>
                    </div>
                </Col>



    )

};

export default Item;
