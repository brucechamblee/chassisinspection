import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNav from '../components/AppNav/AppNav';
import AppFooter from '../components/AppFooter/AppFooter';
import InspectionPage from '../pages/inspection';
import SearchPage from '../pages/search';
import SavedPage from '../pages/saved';
import NotFound from '../pages/NotFound';

function AppRouter () {
    return (
        <Router>
            <React.Fragment>
                <AppNav />
                <Switch>
                    <Route exact path="/" component={InspectionPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/saved" component={SavedPage} />
                    <Route component={NotFound} />
                </Switch>
                <AppFooter />
            </React.Fragment>
        </Router>
    );
}

export default AppRouter;