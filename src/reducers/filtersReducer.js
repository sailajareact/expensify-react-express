import moment from 'moment';

// defining filters default state object
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
// creating filters reducer
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, ...action.text };
        case 'SET_START_DATE':
        // console.log(`startd ${action.startDate}`)
            return { ...state, ...action.startDate };
        case 'SET_END_DATE':
            return { ...state, ...action.endDate };
        case 'SET_SORT_BY':
        console.log('sort')
            return { ...state, ...action.sortBy };
        default:
            return state;
    }
}
