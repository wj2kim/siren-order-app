import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import Routes from 'routes';
import history from 'utils/history';
import GlobalStyle from 'styles/global-styles';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

import 'locales/i18n';

import FontFaceObserver from 'fontfaceobserver';

const openSansObserver = new FontFaceObserver('Inter', {});

openSansObserver.load().then(() => {
    document.body.classList.add('fontLoaded');
});

const App = () => {
    return(
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
                <ThemeProvider>
                    <HelmetProvider>
                        <Router history={history}>
                            <Routes/>
                            <ToastContainer />
                            <GlobalStyle />
                        </Router>
                    </HelmetProvider>
                </ThemeProvider>
            {/* </PersistGate> */}
        </Provider>
    )
}

export default App;