import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { setExpenses } from '../../actions/expenses';
import { access } from 'fs';

test('Should setup default state', () =>
{
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense with given id', () =>
{
    const action = 
    {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense with given incorrect id', () =>
{
    const action = 
    {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add a given expense', () =>
{
    const expense = 
    {
        id: '5',
        description: 'Testing expense',
        amount: 100,
        createdAt: moment().startOf('month'),
        note: ''
    };
    const action = 
    {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
}); 

test('Should edit expense with a given id', () =>
{
    const description = 'Testing app';
    const action = 
    {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:
        {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('Should not edit expense with a given incorrect id', () =>
{
    const description = 'Testing app';
    const action = 
    {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:
        {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).not.toBe(description);
});

test('Should set given expenses', () =>
{
    const prevState = [
        {
            id: 5,
            description: 'coffee',
            note: '',
            amount: 10
        },
        {
            id: 6,
            description: 'tea',
            note: 'sadsa',
            amount: 5
        }
    ];
    const action = 
    {
        type: 'SET_EXPENSES',
        expenses
    };
    const state = expensesReducer(prevState, action);
    expect(state).toEqual(expenses);
});