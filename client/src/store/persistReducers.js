import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// import hardSet from 'redux-persist/es/stateReconciler/hardSet';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      blacklist: ['error', 'loading'],
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
