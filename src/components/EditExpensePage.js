import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component 
{
    onSubmit = (expense) =>
    {
        //this.props.editExpense(this.props.expense.id, expense);
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () =>
    {
        //this.props.removeExpense({ id: this.props.expense.id });
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render()
    {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">EditExpensePage</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>
                        Remove expense
                    </button>
                </div>
            </div>
        );
    }
}

// const EditExpensePage = (props) => (
//     <div>
//         <h3>EditExpensePage</h3>
//         <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) =>
//             {
//                props.editExpense(props.expense.id, expense);
//                props.history.push('/');
//             }}
//         />
//         <button onClick={() =>
//             {
//                 props.removeExpense({ id: props.expense.id });
//                 props.history.push('/');
//             }}>
//             Remove
//         </button>
//     </div>
// );

const mapStateToProps = (state, props) =>
{
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        //editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        //removeExpense: (id) => dispatch(removeExpense(id))
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);