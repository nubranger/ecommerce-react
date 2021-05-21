import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Row} from "reactstrap";
import data from "../data";
import {EshopContext} from "../context/context";
import Sort from "./Sort";


const Items = () => {
    const {products} = useContext(EshopContext);
    const [grid, setGrid] = useState(3);
    const [productsList, setProductsList] = useState(data);

    const handleGrid = (prop) => {
        setGrid(prop);
    }


    const handlePrice = (props) => {
        let tempProducts = [...productsList]

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

        setProductsList(tempProducts);
    }

    const handleName = (props) => {
        let tempProducts = [...productsList];

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

        setProductsList(tempProducts);
    }


    return (
        <div className="items">
            <div>ACTIVE FILTERS</div>
            <div className="mt-3">
                <Sort handleName={handleName} handlePrice={handlePrice} handleGrid={handleGrid}/>
            </div>
            <Row className="mt-3">

                {
                    productsList.map((item) =>

                        (
                            <Col key={item.id} lg={grid}>
                                <Card>
                                    <img src={item.img} alt={item.title}/>
                                    <h6>{item.title}</h6>
                                    <p>$ {item.price}</p>
                                </Card>
                            </Col>
                        )
                    )
                }
            </Row>
        </div>
    );
};

export default Items;
