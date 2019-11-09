import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should correctly render ExpensesSummary with 1 expense', () =>
{
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expense', () =>
{
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});