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
    const [toggleAccount, setToggleAccount] = useState(false);
    const [likedItems, setLikedItems] = useState(getLikedStorage());
    const [cartList, setCartList] = useState(getCartStorage());
    const [cartTotal, setCartTotal] = useState(0);

    const countTotal = () => {
        // console.log("countTotal");
        let count = cartList.map(item => {
           return item.price;
        });

        setCartTotal(0);

        if (count.length > 0) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            count.reduce(reducer);
            setCartTotal(count.reduce(reducer));
        }

    }

    useEffect(() => {
            countTotal();
    }, [cartList]);


    const handleLikeItems = (props) => {
        let tempLikedProducts = [...likedItems];

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

    const handleCartItems = (props) => {
        let tempCart = [...cartList];

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
                toggleAccount, setToggleAccount,
                handleLikeItems,
                likedItems, setLikedItems,
                cartList, setCartList,
                handleCartItems,
                cartTotal
            }}
        >
            {children}
        </EshopContext.Provider>
    );
};

export {EshopProvider, EshopContext};
