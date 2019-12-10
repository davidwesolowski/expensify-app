import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() =>
{
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        startRemoveExpense={startRemoveExpense} 
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
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle onSubmit', () =>
{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
}); 
