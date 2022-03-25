import * as ActionType from "../constants";
const initialState = {
  loading: false,
  data: [],
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_USER_REQUEST:
      state.loading = true;
      state.data = [];
      state.error = null;
      return { ...state };
    case ActionType.GET_LIST_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.GET_LIST_USER_FAILED:
      state.loading = false;
      state.data = [];
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userReducer;
