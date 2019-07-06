import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom';

const ShopHeader = ({numItems, total}) =>{
    return(
        <header className="shop-header row">
            <Link to="/" >
                <div className="logo text-dark" href="#">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-car">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {numItems} Позиций (${total})
                </div>
            </Link>
            
        </header>
    )
}

export default ShopHeader;