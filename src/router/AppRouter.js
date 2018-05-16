import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import HelpPage from '../components/HelpPage';
// import NotFound from '../components/NotFoundPage';
import NotFoundPage from '../components/NotFoundPage';
// import Header from './components/Header'

const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboard} exact={true}/>
    <Route path="/create" component={AddExpense}/>
    <Route path="/edit/:id" component={EditExpense}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;