/* 서버로 부터 userData 를 받아 옴 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_USERDATA } from 'app/constants';
import { userDataLoaded, userDataLoadError } from 'app/actions';

import { request } from 'utils/request';
import { makeSelectEmail } from './selectors';


export function* getUserData() {
    const email = yield select(makeSelectEmail());
    const testData = { email, password: '123123'}; // 테스트 용 
    const requestURL = `${process.env.REACT_APP_API_URL}/login`;

    try {
        const userData = yield call(request, requestURL, testData);
        yield put(userDataLoaded(userData));
    }catch (err){
        yield put(userDataLoadError(err));
    }
}

/* 사가의 watch 함수 */
export default function* watchLogin() {
    /* 
    * LOAD_USERDATA 액션을 watch 하고 있다가 발동되면 
    * getUserData() 를 call 한다. 
    *  "takeLatest" 함수를 사용해서 가장 마지막으로 요청한 API call만이 적용된다.
    * 컴포넌트가 unmount 되면 자동적으로 watch가 취소 된다.
    */
   yield takeLatest(LOAD_USERDATA, getUserData);
}