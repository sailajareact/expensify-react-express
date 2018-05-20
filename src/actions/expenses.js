import uuid from 'uuid';
import {firebase, database} from '../firebase/firebase'

// creating action generator for add expense
const addExpense = (expense) => {
    return ({
        type: 'ADD_EXPENSE',
        expense
    })
}

export const startAddExpense = (expenseData = {}) => {
    return (dispach) => {
    const { description = '',
        note = '',
        amount = 0,
        createdAt = 0 } = expenseData;
        const expense = {description, note, amount, createdAt}

        firebase.database().ref('expenses').push(expense).then((ref) => {
            dispach(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

// EDIT_EXPENSE action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export { addExpense };