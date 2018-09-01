import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = {
  isAuthenticated: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default auth;
