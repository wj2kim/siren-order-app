export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInError(error) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: { error}
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
