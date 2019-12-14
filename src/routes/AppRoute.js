import React from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFound404Page from '../components/NotFound404Page';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRoute = () => (
    <Router history={history}>
        <div>
            <Switch> 
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFound404Page}/>
            </Switch>
        </div>
    </Router>
);

export default AppRoute;

// const AppRoute = () => (
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Switch>
//                 <Route path="/" component={LoginPage} exact={true}/>
//                 <Route path="/dashboard" component={ExpensifyDashboardPage}/>
//                 <Route path="/create" component={AddExpensePage}/>
//                 <Route path="/edit/:id" component={EditExpensePage}/>
//                 <Route path="/help" component={HelpExpensePage}/>
//                 <Route component={NotFound404Page}/>
//             </Switch>
//         </div>
//     </BrowserRouter>
// );
