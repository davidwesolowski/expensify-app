import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute, { history } from './routes/AppRoute';
import moment from 'moment';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense, startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from '../src/firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// store.subscribe(() =>
// {
//     const state = store.getState();
//     const visible = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visible);
// });
// store.dispatch(addExpense({ description: 'Water bill', amount: 200, note: 'Nothing', createdAt: 1569880801234 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 250, note: 'Nothing', createdAt: 1569880809999 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100, note: 'Nothing', createdAt: 1569880800333 }));
//store.dispatch(setTextFilters('bill'));

let hasRendered = false;
const renderApp = () =>
{
    if (!hasRendered)
    {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRoute />    
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() =>
// {
//     ReactDOM.render(jsx, document.getElementById('app'));
// });

firebase.auth().onAuthStateChanged((user) =>
{
    if (user)
    {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() =>
        {
            renderApp();
            if (history.location.pathname === '/')
            {
                history.push('/dashboard');
            }
        });
    }
    else
    {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});