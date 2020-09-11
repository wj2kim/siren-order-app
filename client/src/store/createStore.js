// import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
// import { createInjectorsEnhancer, injectReducer } from 'redux-injectors';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './modules/rootSaga';

// import { createReducer } from '@reduxjs/toolkit';


// export default (reducers) => {
  
//   let composeEnhancers = compose;

//   if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
//     /* eslint-disable no-underscore-dangle */
//     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
//       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
//   }


//   const middlewares = [];
//   const reduxSagaMonitorOptions = {};

//   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
//   middlewares.push(sagaMiddleware);
//   const enhancer = [applyMiddleware(...middlewares)];


  
//   const createReducer =  ( injectedReducer = {} ) => {
//     const rootReducer = combineReducers({
//       ...injectReducer,
//      reducers,
//     })
//     return rootReducer;
//   }

//   const runSaga = sagaMiddleware.run(rootSaga);


//   return createStore(
//     composeEnhancers(...enhancer),
//     createInjectorsEnhancer({
//         createReducer,
//         runSaga,
//       }),
//     );
// };



import { createStore, compose, applyMiddleware } from 'redux';


export default (reducers, middlewares) => {

  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const enhancer = [applyMiddleware(...middlewares)];

  return createStore(
    reducers,
    composeEnhancers(...enhancer),
    );
};
