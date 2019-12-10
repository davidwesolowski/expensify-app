import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses  } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) =>
{
    const expensesData = [];
    expenses.forEach((expense) =>
    {
        expensesData[expense.id] = 
        { 
            description: expense.description, 
            note: expense.note, 
            createdAt: expense.createdAt, 
            amount: expense.amount 
        };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () =>
{
    const action = removeExpense({ id: 'abc123' });
    expect(action).toEqual(
    {
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should setup edit expense object', () =>
{
    const action = editExpense('abc123', { description: 'Coffee' });
    expect(action).toEqual(
    {
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: 
        {
            description: 'Coffee'
        }
    });
});

test('should setup add expense object with values', () =>
{
    const action = addExpense(expenses[2]);
    expect(action).toEqual(
    {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) =>
{
    const store = createMockStore({});
    const expenseData = 
    {
        description: 'Mouse',
        note: 'This one is the best',
        createdAt: 0,
        amount: 3000
    };

    store.dispatch(startAddExpense(expenseData)).then(() =>
    {
        const actions = store.getActions();
        expect(actions[0]).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense:
            {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) =>
    {
        expect(snapshot.val()).toEqual(
        {
            ...expenseData
        });
        done();
    });

});

test('should add expense with defaults to database and store', (done) =>
{
    const store = createMockStore({});
    const expenseData = 
    {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };

    store.dispatch(startAddExpense()).then(() =>
    {
        const actions = store.getActions();

        expect(actions[0]).toEqual(
        {
           type: 'ADD_EXPENSE',
           expense: 
           {
               id: expect.any(String),
               ...expenseData
           }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) =>
        {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });
});

test('Should setup set expenses', () =>
{
    const action = setExpenses(expenses);
    expect(action.expenses).toEqual(expenses);
});

test('Should fetch expenses from firebase', (done) =>
{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() =>
    {
        const actions = store.getActions();
        expect(actions[0]).toEqual(
        {
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});


// test('should setup add expense object with default values', () => 
// {
//     const action = addExpense();
//     expect(action).toEqual(
//     {
//         type: 'ADD_EXPENSE',
//         expenses:
//         {
//             description: '',
//             amount: 0,
//             note: '',
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });


