import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { getVisibleExpenses } from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) =>
{
    const expensesCount = props.expenses.length;
    const expensesTotal = getExpensesTotal(props.expenses);
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    {expensesCount === 0 ? "0 expenses" : 
                        <span>
                            Viewing <span>{expensesCount}</span> totalling <span>{numeral(expensesTotal / 100).format('0,0.00$')}</span>
                        </span>}
                </h1>            
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add expense</Link>
                </div>
            </div>
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
