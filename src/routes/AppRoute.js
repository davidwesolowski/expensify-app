import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFound404Page from '../components/NotFound404Page';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
                <Route component={NotFound404Page}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;