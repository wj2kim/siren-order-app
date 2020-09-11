// import createSagaMiddleware from 'redux-saga';
// import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import { createInjectorsEnhancer } from 'redux-injectors';
// import { persistStore } from 'redux-persist';
// // import configureStore from './configureStore';
// import persistReducers from './persistReducers';
// import rootReducer from './modules/rootReducer';
// import rootSaga from './modules/rootSaga';


// /* -- Saga 관련 -- */
// // const middlewares = [];
// // const reduxSagaMonitorOptions = {};

// // const sagaMiddleware = createSagaMiddleware();
// // middlewares.push(sagaMiddleware);
// // const runSaga = sagaMiddleware.run(rootSaga);
// const reduxSagaMonitorOptions = {};
// const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

// /* -------------- */

// const configureStore = () => {
  
//     let composeEnhancers = compose;

  
//     if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
//       if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
//         composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
//     }

   
//     const middlewares = [sagaMiddleware];

//     const enhancer = [applyMiddleware(...middlewares)];

//     // sagaMiddleware.run(rootSaga);

//     const reducers = persistReducers(rootReducer);
  
//     const createReducer =  ( injectedReducer = {} ) => {
//       const rootReducer = combineReducers({
//         ...injectedReducer,
//        reducers,
//       })
//       return rootReducer;
//     }



//     // const runSaga = sagaMiddleware.run;
    
    
//     return createStore(
//       createReducer,
//       composeEnhancers(...enhancer),
//       );
//   };

// const store = configureStore();

// store.runSaga = sagaMiddleware.run(rootSaga);
// store.injectedReducers = {}; 
// store.injectedSagas = {}; 

// const persistor = persistStore(store);


// export { store, persistor };



import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const middlewares = [];
const sagaMonitor = {};

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };