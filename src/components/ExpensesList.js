import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? 
            (
                <p>No expenses!</p>
            ) : 
            (
                props.expenses.map((expense) =>
                {
                    return <ExpensesListItem key={expense.id} expense={expense}/>
                })
            )
        }

    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesList);

 
