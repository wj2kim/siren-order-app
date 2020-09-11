/*
* App 액션
*/

import { LOAD_USERDATA, LOAD_USERDATA_SUCCESS, LOAD_USERDATA_ERROR } from './constants';

/**
 * 1) userData 를 요청하는 액션은 사가를 실행 시킨다.
 * 
 * @return {object} LOAD_USERDATA 타입의 액션 객체를 리턴한다.
 */
export function loadUserData() {
    return {
        type: LOAD_USERDATA,
    };
}

/**
 * 1)의 요청으로 userData 가 사가를 통해 받게 되면 dispatch 가 된다
 * 
 * @param { object } userData 유저 정보
 * 
 * @return { object } LOAD_USERDATA_SUCCESS 액션 객체
 */
export function userDataLoaded(userData){
    return {
        type: LOAD_USERDATA_SUCCESS,
        userData,
    }
}

/**
 * 1)의 요청으로 userData 가 사가를 통해 받게 되면 dispatch 가 된다
 * 
 * @param { object } error 에러
 * 
 * @return { object } LOAD_USERDATA_ERROR 액션 객체
 */
export function userDataLoadError(error){
    return {
        type: LOAD_USERDATA_ERROR,
        error,
    }
}
