import React from 'react'
import {routes} from '../../configRoutes'
import './NavBar.css'
import logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

function NavBar({isVisible}) {



    return isVisible && (
        <nav>
            <div className="logo">
               <img src={logo} width='98px' height='40px' alt='Logo'/>
            </div>
            <ul className="menu-area">
                <li>
                    <NavLink exact to={routes.HOME} activeClassName="is-active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={routes.SHOP} activeClassName="is-active" >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to={routes.REVIEWS} activeClassName="is-active" >
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <hr/>
        </nav>
    )
}

export default NavBar
