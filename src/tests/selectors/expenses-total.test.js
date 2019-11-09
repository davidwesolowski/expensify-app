import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 when no expenses provided', () =>
{
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should add correctly one expense', () =>
{
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('Should add correctly multiple expenses', () =>
{
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});