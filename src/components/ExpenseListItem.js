import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt})=>(
    <div>
    {console.log(`test ${amount} ${amount / 100}`)}
    <NavLink to={`/edit/${id}`}>
    <h3>{description}</h3>
    </NavLink>
    <p>{numeral(amount / 10000).format('$0,0.00')} - 
    {moment(createdAt).format('MMM Do YYYY')}
    </p>
    </div>
)

export default ExpenseListItem;

// {console.log(dispatch)}
// <button 
//     onClick={()=>{
//         dispatch(removeExpense(id))}}>remove</button>
// export default connect()(ExpenseListItem);


