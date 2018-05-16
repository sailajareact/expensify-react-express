import React from 'react'
import Link from 'react-router-dom'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'


const AddExpense=(props)=>(
    <div>
    <p>add expense page</p>
    <ExpenseForm onExpenseSubmit={(expense)=>{
        console.log(expense)
        props.dispatch(addExpense(expense));
        props.history.push('/')
    }}/>
    </div>
);

export default connect()(AddExpense);