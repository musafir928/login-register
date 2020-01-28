import { DELETE_USER, CONFIRM_USER, UPDATE_USER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case UPDATE_USER:
      const { id, role } = action.payload;
      const index = state.users.findIndex(e => e.id === id);
      const newRole = role === "admin" ? "user" : "admin";
      state.users[index].role = newRole;
      return {
        ...state
      };
    case CONFIRM_USER:
      const i = state.users.findIndex(e => e.id === action.payload);
      state.users[i].confirmed = "true";
      console.log(state.users[i]);
      return {
        ...state
      };
    default:
      return state;
  }
};
