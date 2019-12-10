import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes/AppRoute';
import moment from 'moment';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilters, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import '../src/firebase/firebase';

const store = configureStore();

store.subscribe(() =>
{
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});

// store.dispatch(addExpense({ description: 'Water bill', amount: 200, note: 'Nothing', createdAt: 1569880801234 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 250, note: 'Nothing', createdAt: 1569880809999 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100, note: 'Nothing', createdAt: 1569880800333 }));

//store.dispatch(setTextFilters('bill'));

const jsx = (
    <Provider store={store}>
        <AppRoute />    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));