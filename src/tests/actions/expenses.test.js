import { addExpense, removeExpense, editExpense  } from '../../actions/expenses';

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
    const expectedData = 
    {
        description: 'Coffee',
        note: 'Testing data',
        amount: 13500,
        createdAt: 1000
    };
    const action = addExpense(expectedData);
    expect(action).toEqual(
    {
        type: 'ADD_EXPENSE',
        expenses:
        {
            ...expectedData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense object with default values', () => 
{
    const action = addExpense();
    expect(action).toEqual(
    {
        type: 'ADD_EXPENSE',
        expenses:
        {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    });
});


