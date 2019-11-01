import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('Should generate ExpenseForm correctly', () =>
{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should generate ExpenseForm with expenses correctly', () =>
{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid submission', () =>
{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', 
    {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () =>
{
    const value = "Testing description";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input')
           .at(0)
           .simulate('change', 
           {
                target: { value }
           });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set note on input change', () =>
{
    const value = "Testing note";
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea')
           .simulate('change', 
           {
                target: { value }
           });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('Should set amount on input change', () =>
{
    const value = '12.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', 
    {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on input change', () =>
{
    const value = '23.555';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', 
    {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () =>
{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', 
    {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe(false);
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
    {
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('Should set new date on date change', () =>
{
    const now = moment(1999999999999);
    const wrapper = shallow(<ExpenseForm />);
    //expect(wrapper).toMatchSnapshot();
    //wrapper.find('withstyles(SingleDatePicker)').prop('onDateChange')(now);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    //console.log(wrapper.find(SingleDatePicker));
    expect(wrapper.state('createdAt')).toEqual(now);
    //expect(wrapper).toMatchSnapshot();
});

test('Should set focused on focus change', () =>
{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBeTruthy();
});

