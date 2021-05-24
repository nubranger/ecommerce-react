import React, {useContext} from 'react';
import {Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import {EshopContext} from "../context/context";

const Cart = () => {
    const {cartList, cartTotal} = useContext(EshopContext);

    return (
        <div className="cart">
            <Container>
                <div className="cart__top mt-3">
                    <h4>SHOPPING
                        BAG <span>({cartList.length === 1 ? `${cartList.length} ITEM` : `${cartList.length} ITEMS`})</span>
                    </h4>
                </div>
                <Row className="mt-3">
                    <Col lg="8">
                        <div className="cart__top--info">
                            <div className="cart__top--info-item">
                                ITEM
                            </div>
                            <div className="cart__top--info-status">
                                <h6>PRICE</h6>
                                <h6>QUANTITY</h6>
                                <h6>TOTAL</h6>
                            </div>
                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom--item">
                                ITEM
                            </div>
                            <div className="cart__bottom--status">
                                <h6>PRICE</h6>
                                <h6>QUANTITY</h6>
                                <h6>TOTAL</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="cart__summary">
                            <div className="cart__summary--promo">
                                <h5>PROMO CODE</h5>
                                <Form>
                                    <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="bi bi-tag"/>
                                            </span>
                                        <input type="text" className="form-control"
                                               placeholder="Promo code"
                                               aria-label="Promo code" aria-describedby="basic-addon1">
                                        </input>
                                        <button className="btn btn-secondary" type="button"
                                                id="basic-addon1">APPLY
                                        </button>
                                    </div>
                                </Form>
                            </div>
                            <div className="cart__summary--info">
                                <div className="cart__summary--info-top">
                                    <h5>ORDER SUMMARY</h5>
                                </div>
                                <div className="cart__summary--info-middle">
                                    <div>
                                        <h6>ORDER SUBTOTAL</h6>
                                        <p>$300.99</p>
                                    </div>
                                    <div>
                                        <h6>SHIPPING</h6>
                                        <p>$7.96</p>
                                    </div>
                                    <div>
                                        <h6>DISCOUNT</h6>
                                        <p style={{color: "red"}}>-$100</p>
                                    </div>
                                    <div>
                                        <h6>PROMO CODE</h6>
                                        <p style={{color: "red"}}>-$20</p>
                                    </div>
                                </div>
                                <div className="cart__summary--info-bottom">
                                    <h5>ORDER TOTAL</h5>
                                    <p>$300</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
