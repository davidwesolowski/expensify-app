const getExpensesTotal = (expenses) =>
{
    // if (!(expenses.constructor === Array))
    //     return expenses.amount;
    // return expenses.reduce((prevValue, currentValue) =>
    // {
    //     return prevValue + currentValue.amount; 
    // }, 0);
    return expenses
        .map((expense) => expense.amount)
        .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
};


export default getExpensesTotal;