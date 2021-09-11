import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="*" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
