import { takeLatest, call, put, all, delay, putResolve } from 'redux-saga/effects';
import history from 'utils/history';
import { signInSuccess, signInError } from './actions';
import { resetProfile } from '../user/actions';
import { api, request } from 'utils/api';
import { signInErrorType } from './types';


export function* signIn({ payload }) {
    /* 로딩 효과 처리 */
    yield delay(500);
    const { email, password } = payload;
    
    /* 혹시 모를 빈값 에러 처리 */
    if(!email || !password) {
        yield put(signInError(signInErrorType.VALIDATION_ERROR)) 
        return false;
    }

    const requestURL = `/login`;

    try {
        const response = yield call(request, requestURL, { email, password });
        console.log('response.data', response.data);
        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
        history.push('/dashboard');
    }catch (err) {
        console.log("에러", err);
        if(!err.response){
            yield put(signInError(signInErrorType.NETWORK_ERROR));
        }else if(err.response.status === 404) {
            yield put(signInError(signInErrorType.USER_NOT_FOUND));
        }else if (err.response.status === 422){
            yield put(signInError(signInErrorType.VALIDATION_ERROR));
        }else if (err.response.status === 400){
            yield put(signInError(signInErrorType.ERROR_MESSAGE(err.response.data.message)));
        }else {
            yield put(signInError(signInErrorType.NETWORK_ERROR));
        }
    }
}

export function setToken({ payload }) {
    if (!payload) return;
        const { token } = payload.auth;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function* signOut() {
    yield delay(300);
    yield history.push('/');
    yield put(resetProfile());
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
