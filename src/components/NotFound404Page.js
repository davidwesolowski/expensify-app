import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404Page = () => (
    <div>
        <h3>Page not found 404</h3>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFound404Page;