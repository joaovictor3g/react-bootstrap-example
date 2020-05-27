import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Modal from './pages/Modal';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Modal} />
            </Switch>
        </BrowserRouter>
    )
}
