import produce from 'immer';

const INITIAL_STATE = {
  token: "",
  signed: false,
  loading: false,
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        draft.error = null;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        // user 정보도 입력해야함. 
        draft.signed = true;
        draft.loading = false;
        draft.error = null
        break;
      }
      case '@auth/CLEAR_AUTH_ERROR': {
        draft.error = null;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.error = null
        draft.signed = false;
        break;
      }
      default:
        break;
    }
  });
}
