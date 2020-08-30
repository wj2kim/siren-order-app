import React from 'react'
import { Login } from 'components';

const LoginContainer = (props) => {
    return (
        <div className="container">
           <Login {...props} /> 
        </div>
    )
}

export default LoginContainer