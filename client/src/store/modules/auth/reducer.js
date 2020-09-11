import produce from 'immer';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

const auth = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'AUTH/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case 'AUTH/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case 'AUTH/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case 'AUTH/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}

export default auth;