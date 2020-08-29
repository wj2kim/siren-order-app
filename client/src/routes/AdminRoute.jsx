import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../lib/auth';

const AdminRoute = ({ component: Component , ...rest }) => {
    return (
        <Route { ...rest } 
            render = {props => isAuth() && isAuth().role === ('admin' || 'master') ? 
                (<Component { ...props } />) : 
                (<Redirect to={{ pathname: '/', state: { from: props.location}}}
                />)}>
        </Route>
    )
};


export default AdminRoute;


