import React, {useContext, useState} from 'react';
import {Card, Col, Row} from "reactstrap";
import Sort from "./Sort";
import {EshopContext} from "../context/context";


const Items = () => {
    const {handleLikeItems, handleCartItems, products, setProducts, likedItems, cartList} = useContext(EshopContext);
    const [grid, setGrid] = useState(3);

    const handleGrid = (prop) => {
        setGrid(prop);
    }

    const handlePrice = (props) => {
        let tempProducts = [...products]

        if (props === "up") {
            tempProducts = tempProducts.sort((a, b) => {
                return a.price - b.price
            });
        }

        if (props === "down") {
            tempProducts = tempProducts.sort((a, b) => {
                return b.price - a.price
            });
        }

        setProducts(tempProducts);
    }

    const handleName = (props) => {
        let tempProducts = [...products];

        if (props === "az") {
            tempProducts = tempProducts.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
        }

        if (props === "za") {
            tempProducts = tempProducts.sort((a, b) => {
                return b.title.localeCompare(a.title)
            })
        }

        setProducts(tempProducts);
    }

    return (
        <div className="items">
            <div>ACTIVE FILTERS</div>
            <div className="mt-3">
                <Sort handleName={handleName} handlePrice={handlePrice} handleGrid={handleGrid}/>
            </div>
            <Row className="mt-3">
                {
                    products.map((item) => {
                        return (
                            <Col key={item.id} lg={grid}>
                                <Card>
                                    <img src={item.img} alt={item.title}/>
                                    <h6>{item.title}</h6>
                                    <p>$ {item.price}</p>
                                    <i
                                        onClick={() => handleLikeItems(item.id)}
                                        className={likedItems.some((liked) => liked.id === item.id) ? "bi bi-heart-fill" : "bi bi-heart"}
                                    />
                                    <i
                                        onClick={() => handleCartItems(item.id)}
                                        className={cartList.some((cartItem) => cartItem.id === item.id) ? "bi bi-cart-check" : "bi bi-cart-plus"}
                                    />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Items;
