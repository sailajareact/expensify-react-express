import { createStore, combineReduce, combineReducers } from 'redux'
import uuid from 'uuid'

// All combineReducers() does generate a function
//  that calls your reducers with the slices of state selected
//  according to their keys, and combining their results into a 
// single object again. It's not magic. And like other reducers,
//  combineReducers() does not create a new object 
// if all of the reducers provided to it do not change state

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// object of the expensify
const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// defining expenses default state
const expensesDefaultState = [];
// creating expenses reducer
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('in add action')
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            console.log('state id ' + state.id + 'action id ' +
                action.id + ' expres ' + (state.id !== action.id));
            return state.filter(({ id }) => (
                id !== action.id
            ));
        case 'EDIT_EXPENSE':
            // console.log('edit expensee')
            // console.log(state)
            // console.log(action)
            return state.map((expense) => {
                // console.log('expens')
                // console.log(expense)
                if (expense.id === action.id) {
                    console.log('edit')
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

// defining filters default state object
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
// creating filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, ...action.text };
        case 'SET_START_DATE':
            return { ...state, ...action.startDate };
        case 'SET_END_DATE':
            return { ...state, ...action.endDate };
        case 'SET_SORT_BY':
            return { ...state, ...action.sortBy };
        default:
            return state;
    }
}

// creating store of expensify with combine reducer
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
})
)

console.log(store.getState());

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' ||
            expense.createdAt >= startDate;
        const endDateMatch = typeof startDate !== 'number' ||
        expense.createdAt <= endDate;
        const textMatch = 
        expense.description.toLowerCase().includes(text.toLowerCase());
        // console.log(startDateMatch)
        // console.log(endDateMatch)
        // console.log(textMatch)
        // console.log(startDateMatch && endDateMatch && textMatch)
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 
        } else if (sortBy === 'amount'){
            console.log('amou')
            console.log(a.createdAt < b.createdAt ? 1 : -1)
            return a.amount > b.amount ? 1 : -1
        }
    })
}

store.subscribe(() => {
    // console.log(store.getState())
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// creating action generator for add expense
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    })
}

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

// EDIT_EXPENSE action generator
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER action gen
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// SET_END_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_SORT_BY
const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    sortBy
})

// dispatching an action add-expense
// const expenseOne =
store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo =
    store.dispatch(addExpense({
        description: 'power bill',
        amount: 500, note: 'internet and power bill'
    }));
const expenseThree = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
store.dispatch(addExpense({ description: 'rent', amount: 800, endDate: 345 }));
const expenseFour = store.dispatch(addExpense({ description: 'rent', amount: 700, note: 'last due' }));
console.log(expenseThree);
// remove-expense action
store.dispatch(removeExpense(expenseThree.expense.id))
// edit-expense action
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 600 }))
// set text filter
store.dispatch(setTextFilter({ text: 'rent' }));
// set start date in filter obj
store.dispatch(setStartDate({ startDate: 0 }));
// set end date in filter obj
store.dispatch(setEndDate({ endDate: 22300 }));
// // set sortby
// store.dispatch(setSortBy({ sortBy: 'date' }))
store.dispatch(setSortBy({ sortBy: 'amount' }))
console.log(store.getState())

// const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);