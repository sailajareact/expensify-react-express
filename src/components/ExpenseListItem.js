import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt})=>(
    <div>
    <NavLink to={`/edit/${id}`}>
    <h3>{description}</h3>
    </NavLink>
    <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;

// {console.log(dispatch)}
// <button 
//     onClick={()=>{
//         dispatch(removeExpense(id))}}>remove</button>
// export default connect()(ExpenseListItem);
