import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpensesListFilter />
        <ExpensesList />
    </div>
);

export default ExpensifyDashboardPage;