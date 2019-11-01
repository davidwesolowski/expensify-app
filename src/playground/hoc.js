import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const hoc = (WrappedComponent) =>
{
    return (props) => (
        <div>
            <p>Piece of information from admin.</p>
            <WrappedComponent {...props}/>
        </div>
    );
}

const AdminInfo = hoc(Info);

const requireAuthentication = (WrappedComponent) =>
{
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>Authentication needed!</p>}
        </div>
    );
}

const AuthenticationInfo = requireAuthentication(Info);

ReactDOM.render(<AuthenticationInfo isAuth={false} info="nothig"/>, document.getElementById('app'));