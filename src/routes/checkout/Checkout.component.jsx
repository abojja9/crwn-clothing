import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import { CartContext } from '../../contexts/cart.context';
import "./Checkout.styles.scss"

const Checkout = () => {
    const { cartItems, cartCount, cartTotal} = useContext(CartContext)
    console.log("cartItems", cartItems);
    

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
        
            </div>
            
            {cartItems?.map((product) => 
            <CheckoutItem key={product.id} cartItem={product}/>
            )}
            
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;
