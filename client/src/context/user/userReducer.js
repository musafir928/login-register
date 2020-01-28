import {
  DELETE_USER,
  CONFIRM_USER,
  UPDATE_USER,
  GET_USERS,
  USER_ERROR,
  CLEAR_USERS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload),
        loading: false
      };
    case UPDATE_USER:
      const { id, role } = action.payload;
      const index = state.users.findIndex(e => e._id === id);
      state.users[index].role = role;
      return {
        ...state,
        users: state.users,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: null,
        error: null
      };
    case CONFIRM_USER:
      const i = state.users.findIndex(e => e._id === action.payload);
      state.users[i].confirmed = true;
      return {
        ...state,
        users: state.users,
        loading: false
      };
    default:
      return state;
  }
};
