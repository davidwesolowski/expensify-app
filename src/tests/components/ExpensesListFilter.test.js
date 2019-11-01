import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpensesListFilter } from '../../components/ExpensesListFilter';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() =>
{
    setTextFilters = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpensesListFilter 
            setTextFilters={setTextFilters}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
        />);
});

test('Shoud ExpensesListFilter render correctly', () =>
{
    expect(wrapper).toMatchSnapshot();
});

test('Should ExpensesListFilter render correctly with alternative filters', () =>
{
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change correctly', () =>
{
    const value = 'rent';
    wrapper.find('input').simulate('change', 
    {
        target: { value }
    });
    expect(setTextFilters).toHaveBeenLastCalledWith(value);
});

test('Should handle sort by amount', () =>
{
    const value = 'amount'
    wrapper.find('select').simulate('change', 
    {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle sort by date', () =>
{
    const value = 'date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', 
    {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should handle date changes', () =>
{
    const dates = 
    {
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    };
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates);
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('Should handle date focus change', () =>
{
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});