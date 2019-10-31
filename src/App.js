import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { NavBar } from './components'
import {routes} from './configRoutes'
import {ShopPage, HomePage, ReviewsPage} from "./Pages/index";
import './App.css'

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route
                    exact path={routes.HOME}
                    component={HomePage}
                />
                <Route
                    path={routes.REVIEWS}
                    component={ReviewsPage}
                />
                <Route
                    path={routes.SHOP}
                    component={ShopPage}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
