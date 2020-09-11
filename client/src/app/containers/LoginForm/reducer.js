import produce from 'immer';
import { LOAD_USERDATA, LOAD_USERDATA_SUCCESS, LOAD_USERDATA_ERROR} from './constants';

/* App의 initial state 정보 */

export const initialState = {
    loading: false,
    error: null, 
    userData: null,
}


const appReducer = ( state = initialState, action ) => {
    produce(state, draft => {
        switch (action.type) {
            case LOAD_USERDATA:
                draft.loading = true;
                draft.loading = false;
                break;

            case LOAD_USERDATA_SUCCESS:
                draft.userData = action.userData;   
                draft.loading = false;
                break;
            
            case LOAD_USERDATA_ERROR:
                draft.error = action.error;
                draft.loading = false;
                break;
            default:
                return state;
        }
    });
}

export default appReducer;