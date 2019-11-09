import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpensesListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpensesListFilter />
        <ExpensesList />
    </div>
);

export default ExpensifyDashboardPage;