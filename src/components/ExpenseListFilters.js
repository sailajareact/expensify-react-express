import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortBy, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component{
  state = {
    calenderFocused: null
  }

  onDatesChange = ({startDate, endDate})=>{
    console.log(startDate)
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
  }

  render(){
    return (
      <div>
    <input
      type="text"
      value={this.props.filters.text}
      onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={this.props.filters.sortBy}
      onChange={(e) => {
          this.props.dispatch(sortByAmount());
        
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
  </div>
    )
    }
    };

const mapStateToProps = (state) => {
  console.log(state.filters)
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
