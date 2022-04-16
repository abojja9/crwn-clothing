import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
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
                <Link className="nav-link" to="/signIn">
                    <div>SIGN IN</div>
                </Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation;