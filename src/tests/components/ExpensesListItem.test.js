import React from 'react';
import { shallow } from 'enzyme';
import ExpensesListItem from '../../components/ExpensesListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpensesListItem', () =>
{
    const wrapper = shallow(<ExpensesListItem expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
});