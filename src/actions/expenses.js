import uuid from 'uuid';

const addExpense = ({ description = '', amount = 0, note = '', createdAt = 0 } = {}) => (
{
    type: 'ADD_EXPENSE',
    expenses: 
    {
        id: uuid(),
        description, 
        amount, 
        note,
        createdAt
    }
});

const removeExpense = ({ id }) => (
{
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => (
{
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

export { addExpense, editExpense, removeExpense };