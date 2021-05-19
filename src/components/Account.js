import React, {useContext} from 'react';
import {EshopContext} from "../context/context";

const Account = () => {
    const {toggleAccount, setToggleAccount, setPassword, setEmail, handleAccount, error} = useContext(EshopContext);

    return (
        toggleAccount && (
            <div className="account">
                <div>
                    <h4>Profile</h4>
                    <i onClick={() => setToggleAccount(false)} className="bi bi-x"/>
                </div>
                <div>
                    <form onSubmit={handleAccount}>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="e-mail"/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                        <button>login</button>
                        <span>Remember me</span>
                        <input type="checkbox"/>
                    </form>
                        <a href="#">Forgot password?</a>
                    <div>{error}</div>
                    <div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Account;
