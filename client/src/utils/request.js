import axios from 'axios';

// axios 로 바꿔서 필요 없을 수도 있는 로직 ?
// /** 
//  * 서버로 부터 받은 JSON 파일을 파싱하는 함수
//  * 204 No Content -> 서버에서 처리 후 클라이언트에 정보를 보낼 필요가 없는 경우 사용한다.
//  * 205 Reset Content -> 서버가 요청을 성공적으로 처리했지만 콘텐츠를 표시하지 않는다. 204 응답과 달리 이 응답은 요청자가 문서 보기를 재설정할 것을 요구한다
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// const parseJSON = (response) => {
//   if (response.status === 204 || response.status === 205) { 
//     return null;
//   }
//   return response.json();
// }

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   응답 값
 *
 * @return {object|undefined}  응답 or 에러 리턴
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}


/**
 * axios 통신 
 *
 * @param  {string} url       요청 url
 * @param  {object} [options] 옵션
 *
 * @return {object}           status 체킹 완료한 응답 값
 */
export const request = (url, options) => {
  const response = axios.post(url, options);
  response.then(checkStatus);
  return response;
}