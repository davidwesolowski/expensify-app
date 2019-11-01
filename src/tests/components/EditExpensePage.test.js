import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() =>
{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[0]}
    />);
});

test('Should EditExpensePage render correctly', () =>
{
    const wrapper = shallow(<EditExpensePage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onClick', () =>
{
    //wrapper.find('button').prop('onClick')();
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle onSubmit', () =>
{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
}); 
