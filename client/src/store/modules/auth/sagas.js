import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from 'utils/api';
import history from 'utils/history';
import { signInSuccess, signFailure } from './actions';
import { request } from 'utils/request';

export function* signIn({ payload }) {

  try {
    const requestURL = `${process.env.REACT_APP_API_URL}/login`;
    const { email, password } = payload;
    const response = yield call(request, requestURL, {
      email,
      password,
    });

    console.log(response);

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(err);
    yield put(signFailure());
  }
}

// export function* signUp({ payload }) {
//   try {
//     const { name, email, password } = payload;

//     yield call(api.post, 'users', {
//       name,
//       email,
//       password,
//       provider: true,
//     });
//     toast.success('Usuário cadastrado!');

//     history.push('/');
//   } catch (err) {
//     toast.error('Falha no cadastro verifique seus dados!');
//     yield put(signFailure());
//   }
// }

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('AUTH/SIGN_IN_REQUEST', signIn),
  takeLatest('AUTH/SIGN_OUT', signOut),
]);
