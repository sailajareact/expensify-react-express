import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const creatAtMoment = moment(expense.createdAt)
        console.log(`expen creat ${moment(expense.createdAt).format('YYYY MMM DD')}`)
        const startDateMatch = startDate ? 
        startDate.isSameOrBefore(creatAtMoment)
         : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(creatAtMoment)
        : true;
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
            return a.amount < b.amount ? 1 : -1
        }
    })
}
