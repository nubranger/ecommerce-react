import React, {useContext, useState} from 'react';
import {
    Button,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
} from "reactstrap";
import HeaderCart from "./HeaderCart";
import HeaderHeart from "./HeaderHeart";
import {EshopContext} from "../context/context";

const Header = () => {
    const {account, toggleAccount, setToggleAccount} = useContext(EshopContext);


    const [showCart, setShowCart] = useState(false);
    const [showHeart, setShowHeart] = useState(false);

    const handleDropdowns = (props) => {
        if (props === "heart") {
            setShowHeart(true);
            setShowCart(false);
        }
        if (props === "cart") {
            setShowHeart(false);
            setShowCart(true);
        }
    }

    return (
        <div className="header">
            <div className="header__top">
                <Container>
                    <div className="header__top-contact">
                        <div className="header__top-contact-email">
                            <i className="bi bi-envelope-fill"/>
                            <span>mymail@email.com</span>
                        </div>
                        <div className="header__top-contact-phone">
                            <i className="bi bi-telephone-fill"/>
                            <span>+370 697 7777777</span>
                        </div>
                    </div>
                    <div className="header__top-profile" onClick={() => setToggleAccount(!toggleAccount)}>
                        <i className="bi bi-file-person-fill"/>
                        {account.username ? <span>{account.username}</span> : <span>Profile</span>}
                    </div>
                    <div className="header__top-social">
                        <i className="bi bi-facebook"/>
                        <i className="bi bi-twitter"/>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="header__middle">
                    <Row>
                        <Col lg="3" md="3">
                            <img src={require("../img/logo.png").default} alt="logo"/>
                        </Col>
                        <Col lg="6" md="6">
                            <InputGroup>
                                <Input type="text" name="search" id="search" placeholder="What do you need?"/>
                                <InputGroupAddon addonType="prepend">
                                    <Button aria-label="search">
                                        <i className="bi bi-search"/>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col lg="3" md="3">
                            <ul className="header__middle-cart">
                                <li className="header__middle-heart">
                                    <div
                                        // onMouseEnter={() => setShowHeart(true)}
                                        onMouseEnter={() => handleDropdowns("heart")}
                                        className="header__middle-heart-list"
                                    >
                                        <i className="bi bi-heart">
                                            <span>2</span>
                                        </i>
                                    </div>

                                    {
                                        showHeart && (
                                            <div
                                                className="header__middle-heart-dropdown"
                                                onMouseLeave={() => setShowHeart(false)}
                                            >
                                                <div className="header__middle-heart-dropdown-top">
                                                    <h4>Liked items</h4>
                                                    <i onClick={() => setShowHeart(false)} className="bi bi-x"/>
                                                </div>
                                                <div>
                                                    <HeaderHeart/>
                                                </div>
                                            </div>
                                        )
                                    }
                                </li>
                                <li className="header__middle-bag">

                                    <div
                                        onMouseEnter={() => handleDropdowns("cart")}
                                        // onMouseEnter={() => setShowCart(true)}
                                        className="header__middle-bag-cart"
                                    >
                                        <i className="bi bi-bag">
                                            <span>77</span>
                                        </i>
                                    </div>
                                    {
                                        showCart && (
                                            <div
                                                className="header__middle-bag-dropdown"
                                                onMouseLeave={() => setShowCart(false)}
                                            >
                                                <div className="header__middle-bag-dropdown-top">
                                                    <h4>Cart list</h4>
                                                    <i onClick={() => setShowCart(false)} className="bi bi-x"/>
                                                </div>
                                                <div>
                                                    <HeaderCart/>
                                                    <div className="header__middle-bag-dropdown-buttons">
                                                        <div>
                                                            <h6>TOTAL:</h6>
                                                            <p>$ 777.00</p>
                                                        </div>
                                                        <Button>VIEW CART</Button>
                                                        <Button className="mt-2 btn-dark">BUY NOW</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                </li>
                                <li className="header__middle-cart-price">
                                    $ 777.00
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
};

export default Header;
