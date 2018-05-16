import React from 'react';
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'

const now = new moment()
console.log(moment().format())

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)

    this.state = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }
}

    onDescriptionChange = (e) => {
        const desc = e.target.value
        this.setState(() => ({ description: desc }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };
    onFocusChange = ({ focused }) => {
        console.log(focused)
        this.setState(() => ({ calendarFocused: focused }));
    };

    onFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'please enter description or amount' }))

        } else {
            this.setState(() => ({ error: '' }));
    
            this.props.onExpenseSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}



// export const ExpenseForm = () => (
//     <div>
//         <h2>Expense Form</h2>
//         <form>
//             <input type="text" placeholder="description" />
//             <input type="number" placeholder="amount" />
//             <SingleDatePicker
//                 date={moment().format('YYYY MM DD')} // momentPropTypes.momentObj or null
//                      />
//             <textarea />
//         </form>
//     </div>
// )

