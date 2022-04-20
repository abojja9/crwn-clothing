import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component';
import CartIcon from '../../components/cart-icon/CartIcon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser)

    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment> 
        <div className="navigation">
            <Link className="logo-container" to="/">
                <Crwnlogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    <div>SHOP</div>
                </Link>

                {currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                ) : (
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                )}

                <CartIcon/>
                
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;
