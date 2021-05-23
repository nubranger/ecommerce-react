import React, {useContext, useState} from 'react';
import {Row} from "reactstrap";
import Sort from "./Sort";
import {EshopContext} from "../context/context";
import Item from "./Item";


const Items = () => {
    const {products, setProducts} = useContext(EshopContext);
    const [grid, setGrid] = useState(4);

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
                            <Item key={item.id} grid={grid} item={item}/>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Items;
