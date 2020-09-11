import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import { GlobalStyle } from '../styles/global-styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* 페이지 로딩 각자의 Loadable.js 을 통해 react.lazy 방식으로 로딩 */
import { Main } from './pages/Main/Loadable';
import { Dashboard } from './pages/Dashboard';
import { NotFoundPage } from './pages/NotFound/Loadable';



const App = () => {
  return (
    <>
      <Helmet
        titleTemplate="%s - Siren Order Application"
        defaultTitle="Siren Order Application"
      >
        <meta name="description" content="A siren order application" />
      </Helmet>
      <ToastContainer />
      <GlobalStyle />
      <Router history = { history }>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            {/* <Route path="/dialogSetting" component={DialogSetting} isPrivate /> */}
            <Route component={NotFoundPage} />
        </Switch>
        {/* <Switch>
          <Route exact path="/" render={(props) => (<MainPage {...props} />)} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;