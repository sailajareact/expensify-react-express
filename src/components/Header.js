import React from 'react'
import {NavLink} from 'react-router-dom'


const Header=()=>(
    <div>
    <h1>Expensify APP</h1>
    <NavLink to="/" activeClassName="link-font" exact={true}>DashBoard</NavLink>
    <NavLink to="/create" activeClassName="link-font">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="link-font">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="link-font">help</NavLink>
    </div>
);

export default Header;
