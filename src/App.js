import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { NavBar } from './components'
import {routes} from './configRoutes'
import {ShopPage, HomePage, ReviewsPage, ReviewsDetails} from "./Pages/index";
import './App.css'

function App() {

    const [isVisible, setVisible] = useState(true);


    return (
        <BrowserRouter>
            <NavBar isVisible={isVisible}/>
            <Switch>
                <Route
                    exact path={routes.HOME}
                    component={HomePage}
                />
                <Route
                    path={routes.REVIEWS}
                    render={() => <ReviewsPage setVisible={setVisible}/>}
                />
                <Route
                    path={routes.SHOP}
                    component={ShopPage}
                />
                <Route
                    path={`${routes.DETAILS}:reviewId/:text`}
                    render={() => <ReviewsDetails setVisible={setVisible}/>}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default App
