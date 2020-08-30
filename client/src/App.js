import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  AdminRoute from 'routes/AdminRoute';
import { HeaderContainer } from 'containers';
import { Dashboard, Landing }  from 'pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <ToastContainer />
       <Switch>
          <Route path="/" exact render={props => <Landing {...props} /> }/>
          {/* <Route path="/login" exact render={props => <Login {...props} /> } /> */}
          <AdminRoute path="/admin" exact component={ Dashboard } />
          {/* <Route path="/login" exact render={props => <Login {...props} /> }/> */}
          <Redirect to='/'/>
        </Switch>
    </div>
  );
}

export default App;
