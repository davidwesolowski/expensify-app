import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = (props) => (
    <div>
        <h3><Link to={`edit/${props.expense.id}`}>{props.expense.description}</Link></h3>
        <p>
            {numeral(props.expense.amount / 100).format('0,0.00$')} 
            &nbsp;-&nbsp; 
            {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
        </p>    
        
    </div>
);

export default ExpensesListItem;