import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) =>
{
    const expensesCount = props.expenses.length;
    if (expensesCount == 0)
        return (
            <div>
                <h1>0 expenses</h1>
            </div>
        );
    const expensesTotal = getExpensesTotal(props.expenses);
    return (
        <div>
            <h1>Viewing {expensesCount} totalling {numeral(expensesTotal / 100).format('0,0.00$')}</h1>
        </div>
    );
};

const mapStateToProps = (state) =>
{
    return {
      expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);