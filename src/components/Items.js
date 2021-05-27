import React, {useState} from 'react';
import {Row} from "reactstrap";
import Sort from "./Sort";
import Item from "./Item";
import {useSortContext} from "../context/sort_context";

const Items = () => {
    const {sorted_products} = useSortContext();
    const [grid, setGrid] = useState(4);

    const handleGrid = (prop) => {
        setGrid(prop);
    }

    return (
        <div className="items">
            <div>ACTIVE FILTERS</div>
            <div className="mt-3">
                <Sort handleGrid={handleGrid}/>
            </div>
            <Row className="mt-3">
                {
                    sorted_products.map((item) => {

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
