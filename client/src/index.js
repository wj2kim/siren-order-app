// Needed for redux-saga es6 generator support
// import '@babel/polyfill';
// import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Initialize languages
import './locales/i18n';

import App from 'app';

import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

import FontFaceObserver from 'fontfaceobserver';
// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});


// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});


const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <HelmetProvider>
            <React.StrictMode>
              <Component />
            </React.StrictMode>
          </HelmetProvider>
        </ThemeProvider>
      </PersistGate>
  </Provider>
);

const render = Component => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

// if (module.hot) {
//   // Hot reloadable translation json files and app
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept(['./app', './locales/i18n'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     const App = require('./app').App;
//     render(App);
//   });
// }

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
