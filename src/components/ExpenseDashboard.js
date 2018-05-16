import React from 'react'
import {connect} from 'react-redux';
import Link from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

// // for testing
// const filters = {text: 'water',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined}

const ExpenseDashboard=()=>(
    <div>
    <h1>this's from Expense dash board page</h1>
    <ExpenseListFilters />
    <ExpenseList />
    </div>
);

// const mapStateToProps = (state)=>{
//     console.log('mapping')
//     console.log(state)
//     return ({
//         expenses: state.expenses,
//         filters: state.filters
//     })
// }

// export default connect(mapStateToProps)(ExpenseDashboard);
export default ExpenseDashboard;