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

export default expensesReducer;