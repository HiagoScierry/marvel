import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { Login } from '../Pages'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router >
    );
}

export default Routes;