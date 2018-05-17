import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './router/AppRouter'
import './firebase/firebase';

const store = configureStore();

console.log('test sourc maps')

// dispach add expense action to the store
// addExpense({ description: 'Water bill' })
store.dispatch(addExpense({description: 'Water bll', amount: 300}))
store.dispatch(addExpense({description: 'power bill'}))
store.dispatch(addExpense({description: 'gas'}))
// store.dispatch(setTextFilter({text: 'bi'}))
console.log(store.getState());

// setTimeout(() => {
//   store.dispatch(setTextFilter({text: 'bi'}))
// }, 2000);

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)

ReactDOM.render(
  <Provider store={store}>
  <AppRouter />
  </Provider>,
  document.getElementById('app'));
  // ReactDOM.render(jsx, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp optionsArr={['defval']}/>, document.getElementById('app'));

