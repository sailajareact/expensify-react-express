import React from 'react'
import Link from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {editExpense} from '../actions/expenses'

const EditExpense=(props)=>{
    console.log(props);
   return (
    <div>
    <p>edit expense page with id: {props.match.params.id}</p>
    <ExpenseForm 
    expense={props.expense}
    onExpenseSubmit={(expense)=>{
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
    }}
    />
    </div>
);};

const mapStateToProps = (state, props)=>({
    expense: state.expenses.find((expense)=>((expense) => expense.id === props.match.params.id)
)
})

export default connect(mapStateToProps)(EditExpense);  