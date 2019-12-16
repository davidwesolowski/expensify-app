import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="visible-for-mobile">Expenses</div>
            <div className="visible-for-desktop">Expense</div>
            <div className="visible-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? 
                (
                    <div className="list-item--message">
                        <span>No expenses!</span>
                    </div>
                ) : 
                (
                    props.expenses.map((expense) =>
                    {
                        return <ExpensesListItem key={expense.id} expense={expense}/>
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesList);

 
