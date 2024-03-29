import { REGISTER_USER, REGISTER_SUCCESS, REGISTER_FAIL } from "./actions";

const initialState = {
  loading: false,
  error: null,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false };
    case REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
