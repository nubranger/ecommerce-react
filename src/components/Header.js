import React, {useEffect, useRef, useState} from 'react';
import {
    Button,
    Col,
    Collapse,
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem, NavLink,
    Row, UncontrolledDropdown
} from "reactstrap";

const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const [sticky, setSticky] = useState("");
    // const elementRef = useRef(null);
    // const toggle = () => setIsOpen(!isOpen);


    // const st = () => {
    //     console.log("1");
    //     if (window.pageYOffset >= s) {
    //         setSticky("sticky");
    //     } else {
    //         setSticky("");
    //     }
    // }

    // useEffect(() => {
    //
    // let s = elementRef.current.offsettop;
    // console.log(s)
    //
    //     // window.addEventListener("scroll", st);
    //     return function cleanup() {
    //         // window.removeEventListener("scroll", st);
    //     };
    // });

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
                        <i className="bi bi-twitter"></i>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="header__middle">
                    <Row>
                        <Col lg="2" md="2">
                            <img src={require("../img/logo.png").default} alt="HTML"/>
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
