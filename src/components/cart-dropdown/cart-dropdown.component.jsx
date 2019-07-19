import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.componet';
import CartItem from '../cart-item/cart-item.comonpent';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {console.log(cartItems)
            }
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropDown);