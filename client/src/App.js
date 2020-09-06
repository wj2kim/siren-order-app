import React , { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  AdminRoute from 'routes/AdminRoute';
import { HeaderContainer } from 'containers';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Reat Lazy 사용 */
const Landing = lazy(() => import('./pages/Landing/Landing'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <ToastContainer />
      <Suspense fallback={<div>로딩 중...</div>}>
       <Switch>
          <Route path="/" exact render={props => <Landing {...props} /> }/>
          {/* <Route path="/login" exact render={props => <Login {...props} /> } /> */}
          <AdminRoute path="/admin/dashboard" exact component={ Dashboard } />
          {/* <Route path="/login" exact render={props => <Login {...props} /> }/> */}
          <Redirect to='/'/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
