import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortedBy, startDate, endDate }) =>
{
    return expenses.filter((expense) =>
    {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // const startDateMatch = startDate ? expense.createdAt >= startDate :true;
        // const endDateMatch = endDate ? expense.createdAt <= endDate : true;
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment) : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment) : true;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b) =>
    {
        if (sortedBy === 'date')
        {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortedBy === 'amount')
        {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

export { getVisibleExpenses };