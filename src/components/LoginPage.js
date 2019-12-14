import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Login</h1>
        <button onClick={startLogin}>Login</button>  
    </div>
);

const mapDispatchToProps = (dispatch) =>
{
    return {
        startLogin: () => dispatch(startLogin())
    };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage };