import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAIL } from "./types";
import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return {
        ...state,
        uploadLoading: true,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploadSuccess: true,
        uploadLoading: false,
        createdItem: action.payload,
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        uploadLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
