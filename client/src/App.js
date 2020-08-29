import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  AdminRoute from './routes/AdminRoute';
import { Dashboard, Landing }  from './pages';


const App = () => {
  return (
    <div className="App">
       <Switch>
          <Route path="/" exact render={props => <Landing {...props} /> }/>
          {/* <Route path="/login" exact render={props => <Login {...props} /> } /> */}
          <AdminRoute path="/admin/dashboard" exact component={ Dashboard } />
          {/* <Route path="/login" exact render={props => <Login {...props} /> }/> */}
          <Redirect to='/'/>
        </Switch>
    </div>
  );
}

export default App;
