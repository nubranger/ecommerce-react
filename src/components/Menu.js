import React from 'react';

const Menu = () => {

    return (
        <div className="sticky-top menu">
            <div className="container">
                <div className="navbar navbar-expand-md navbar-light bg-dark">

                    <div className="navbar-brand">

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-card-list"/>
                                CATEGORIES
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <button className="dropdown-item">category1</button>
                                </li>
                                <li>
                                    <button className="dropdown-item">category2</button>
                                </li>
                                <li>
                                    <button className="dropdown-item">category3</button>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-nav nav-pills">
                        <button className="nav-link active" aria-current="page">HOME</button>
                        <button className="nav-link">SHOP</button>
                        <button className="nav-link">CONTACT</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;
