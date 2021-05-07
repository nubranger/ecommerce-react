import React from 'react';
import {
    Button,
    Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
} from "reactstrap";

const Header = () => {

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
                    <div className="header__top-profile">
                        <i className="bi bi-file-person-fill"/>
                        <span>Login</span>
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
                        <Col lg="2" md="2">
                            <img src={require("../img/logo.png").default} alt="logo"/>
                        </Col>
                        <Col lg="7" md="7">
                            <InputGroup>
                                <Input type="text" name="search" id="search" placeholder="What do you need?" />
                                <InputGroupAddon addonType="prepend">
                                    <Button>
                                        <i className="bi bi-search"/>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col lg="3" md="3">
                            <ul className="header__middle-cart">
                                <li className="header__middle-cart-heart">
                                    <i className="bi bi-heart">
                                        <span>2</span>
                                    </i>
                                </li>
                                <li className="header__middle-bag">
                                    <i className="bi bi-bag">
                                        <span>77</span>
                                    </i>
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
