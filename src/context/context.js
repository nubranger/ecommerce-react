import React, {useState, useEffect, createContext} from 'react';
import data from "../data";
import axios from 'axios';
import {getProducts} from '../api/products_api';

const EshopContext = createContext();

const EshopProvider = ({children}) => {

    const getLikedStorage = () => {
        let storage = [];
        if (localStorage.getItem('likedItems')) {
            storage = JSON.parse(localStorage.getItem('likedItems'));
        }
        return storage;
    };

    const getCartStorage = () => {
        let storage = [];
        if (localStorage.getItem('cartItems')) {
            storage = JSON.parse(localStorage.getItem('cartItems'));
        }
        return storage;
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [account, setAccount] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState(data);
    const [likedItems, setLikedItems] = useState(getLikedStorage());
    const [cartList, setCartList] = useState(getCartStorage());
    const [cartTotal, setCartTotal] = useState(0);
    const [cartTotalWithDiscount, setCartTotalWithDiscount] = useState(0);
    const [promo, setPromo] = useState(0);
    const [promoCode, setPromoCode] = useState("");
    const [shipping, setShipping] = useState(4);

    const handlePromo = (e) => {
        e.preventDefault();

        if (promoCode === "777") {
            setPromo(20);
        }
    }

    // console.log(cartList)

    const handleQuantity = ({id, value}) => {
        let tempList = [...cartList];
        tempList.map(item => {
            if (item.id === id && item.price && item.discount) {

                console.log(item.discount = (item.discount * value));
                console.log(item);
            }
            if (item.id === id && item.price && !item.discount) {
                console.log(item);
            }

            return {}


        });

    }

    const countTotal = () => {
        let count = cartList.map(item => {
            return item.price;
        });

        let zero = 0
        setCartTotal(zero.toFixed(2));

        if (count.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            count.reduce(reducer);
            setCartTotal(count.reduce(reducer).toFixed(2));
        }
    }

    const countTotalWithDiscount = () => {
        let count = cartList.map(item => {
            let prices = null;

            if (item.price && item.discount) {
                prices = item.discount
            }
            if (item.price && !item.discount) {
                prices = item.price
            }

            return prices;
        });

        let zero = 0
        setCartTotalWithDiscount(zero.toFixed(2));

        if (count.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            count.reduce(reducer);
            setCartTotalWithDiscount(count.reduce(reducer).toFixed(2));
        }
    }

    useEffect(() => {
        countTotal();
        countTotalWithDiscount();
    }, [cartList, cartTotal, cartTotalWithDiscount, promo]);

    const handleLikeItems = (props) => {
        let tempLikedProducts = [...likedItems];

        if (Number.isInteger(props)) {

            let filteredItem = products.filter(item => item.id === props);

            if (!tempLikedProducts.some((liked) => liked.id === props)) {
                tempLikedProducts.push(...filteredItem);
                setLikedItems(tempLikedProducts);
                localStorage.setItem("likedItems", JSON.stringify(tempLikedProducts));
            }

            if (likedItems.some((liked) => liked.id === filteredItem[0].id)) {
                filteredItem = likedItems.filter(item => item.id !== props);
                setLikedItems(filteredItem);
                localStorage.setItem("likedItems", JSON.stringify(filteredItem));
            }
        }

        if (props === "clear") {
            setLikedItems([]);
            localStorage.setItem("likedItems", JSON.stringify([]));
        }
    }

    const handleCartItems = (props) => {
        let tempCart = [...cartList];

        if (Number.isInteger(props)) {

            let filteredItem = products.filter(item => item.id === props);

            if (!tempCart.some((liked) => liked.id === props)) {
                tempCart.push(...filteredItem);
                setCartList(tempCart);
                localStorage.setItem("cartItems", JSON.stringify(tempCart));
            }

            if (cartList.some((liked) => liked.id === filteredItem[0].id)) {
                filteredItem = cartList.filter(item => item.id !== props);
                setCartList(filteredItem);
                localStorage.setItem("cartItems", JSON.stringify(filteredItem));
            }
        }

        if (props === "clear") {

            setCartList([]);
            localStorage.setItem("cartItems", JSON.stringify([]));
        }
    }

    const handleAccount = (e) => {
        e.preventDefault();

        console.log("handleAccount");

        if (email === "" || password === "") {
            setError("Enter all fields");
        } else {

            setIsLoading(true);
            setError("");
            axios.post('/login', {
                    username: email,
                    password: password
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    // console.log(response.headers);

                    setAccount({username: response.headers.username, roles: response.headers.roles});
                }).catch(error => {
                if (error.response.data.error) {
                    setError(error.response.data.error);
                } else {
                    setError("Unknown error");
                }

            }).finally(() => {
                setIsLoading(false);
            })

        }

    }

    useEffect(() => {
        setIsLoading(true);
        getProducts().then(data => {
            setProducts(data);
        })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    useEffect(() => {

        if (window.user) {
            let user = window.user;
            console.log(user);
            setAccount({username: user.username, roles: user.roles});
        }
    }, []);

    return (
        <EshopContext.Provider
            value={{
                error,
                isLoading,
                setPassword,
                setEmail,
                handleAccount,
                account,
                products, setProducts,
                handleLikeItems,
                likedItems, setLikedItems,
                cartList, setCartList,
                handleCartItems,
                cartTotal,
                cartTotalWithDiscount,
                setCartTotalWithDiscount,
                handlePromo,
                promoCode, setPromoCode,
                promo, setPromo,
                shipping, setShipping,
                handleQuantity
            }}
        >
            {children}
        </EshopContext.Provider>
    );
};

export {EshopProvider, EshopContext};
