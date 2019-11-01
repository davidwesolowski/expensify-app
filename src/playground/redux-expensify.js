import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', amount = 0, note = '', createdAt = 0 } = {}) => (
{
    type: 'ADD_EXPENSE',
    expenses: 
    {
        id: uuid(),
        description, 
        amount, 
        note,
        createdAt
    }
});

const removeExpense = ({ id }) => (
{
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id }, updates) => (
{
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) =>
{
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((element) => element.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>
            {
                if (expense.id === action.id)
                {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else
                {
                    return expense;
                }
            });
            
        default:
            return state;
    }
};

const setTextFilters = (text = '') => (
{
    type: 'SET_TEXT',
    text
});

const sortByAmount = () => (
{
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => (
{
    type: 'SORT_BY_DATE'
});

const setStartDate = (date = undefined) => (
{
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date = undefined) => (
{
    type: 'SET_END_DATE',
    date
});

const filtersDefaultState = 
{
    text: '',
    sortedBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) =>
{
    switch (action.type)
    {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortedBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortedBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortedBy, startDate, endDate }) =>
{
    return expenses.filter((expense) =>
    {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) =>
    {
        if (sortedBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else
        {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })    
);

store.subscribe(() =>
{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 400, createdAt: -12000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(editExpense({ id: expenseTwo.expenses.id} , { amount: 500 }));

//store.dispatch(setTextFilters('rent'));
// store.dispatch(setTextFilters());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-5000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1001));

const demoState =
{
    expenses:
    [
        {
            id: 'dsafasdsa',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters:
    {
        text: 'rent',
        sortedBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
