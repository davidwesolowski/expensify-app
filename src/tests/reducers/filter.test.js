import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default state value', () =>
{
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(
    {
        text: '',
        sortedBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should setup sortedBy value to amount', () =>
{
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortedBy).toBe('amount');
});

test('Should setup sortedBy value to date', () =>
{
    const currentState = 
    {
        text: '',
        sortedBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortedBy).toBe('date');
});

test('Should setup text value', () =>
{
    const action = 
    {
        type: 'SET_TEXT',
        text: 'testing app'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(action.text);
})

test('Should setup startDate value', () =>
{
    const currentState = 
    {
        text: '',
        sortedBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = 
    {
        type: 'SET_START_DATE',
        date: moment().startOf('month'),
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toBe(action.date);
});

test('Should setup endDate value', () =>
{
    const currentState = 
    {
        text: '',
        sortedBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = 
    {
        type: 'SET_END_DATE',
        date: moment().endOf('month')
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toBe(action.date);
});