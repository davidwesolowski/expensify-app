import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>&nbsp;
        <NavLink activeClassName="is-active" to="create">Create expense</NavLink>&nbsp;
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </div>
);

export default Header;