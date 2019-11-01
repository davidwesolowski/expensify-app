import React from 'react';
import { Link } from 'react-router-dom';

const ExpensesListItem = (props) => (
    <div>
        <h3><Link to={`edit/${props.expense.id}`}>{props.expense.description}</Link></h3>
        <p>
            {props.expense.amount} - {props.expense.createdAt}
        </p>    
        
    </div>
);

export default ExpensesListItem;