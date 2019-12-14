import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/dashboard">Dashboard</NavLink>&nbsp;
        <NavLink activeClassName="is-active" to="/create">Create expense</NavLink>&nbsp;
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) =>
{
    return {
        startLogout: () => dispatch(startLogout())
    };
};

export default connect(undefined, mapDispatchToProps)(Header);