import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectorExpenses from '../selectors/expenses';

export const ExpenseList= (props)=>(
    <div>
    {
      props.expenses.length === 0 ? (<p>No Expenses</p>) : (
        <div>  
        <h2>Expense List</h2> 
    {
        props.expenses.map((expense)=>{
            return (
                <ExpenseListItem key={expense.id} {...expense}/>
            )
        }) 
    }
    </div>
    )
    }
    </div>
)
// {props.filters.text}
const mapStateToProps = (state)=>{
    console.log('mapping')
    console.log(state)
    return ({
        expenses: selectorExpenses(state.expenses, state.filters)
         })
}

// const mapStateToProps = (state)=>{
//     console.log('mapping')
//     console.log(state)
//     return ({
//         expenses: state.expenses,
//         filters: state.filters
//     })
// }
export default connect(mapStateToProps)(ExpenseList);