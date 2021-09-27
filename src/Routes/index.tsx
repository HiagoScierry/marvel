import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Login, Home } from '../Pages'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router >
    );
}

export default Routes;