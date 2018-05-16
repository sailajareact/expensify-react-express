 import uuid from 'uuid';

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

export {addExpense};