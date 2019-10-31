import React from 'react'
import {Link} from "react-router-dom";
import {routes} from '../../configRoutes'
import './NavBar.css'
import logo from '../../images/logo.svg'

function NavBar() {

    return (
        <nav>
            <div className="logo">
               <img src={logo} width='98px' height='40px' alt='Logo'/>
            </div>
            <ul className="menu-area">
                <li>
                    <Link to={routes.HOME}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={routes.SHOP}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to={routes.REVIEWS}>
                        Reviews
                    </Link>
                </li>
            </ul>
            <hr/>
        </nav>
    )
}

export default NavBar
