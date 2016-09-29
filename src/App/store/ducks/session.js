// Actions
const LOGIN = 'auth/gateway/LOGIN';
const LOGOUT = 'auth/gateway/LOGOUT';

const initialState = {
  login: JSON.parse(localStorage.getItem("brisca-session"))
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("brisca-session", JSON.stringify(action.data));
      return {
        ...state,        
        login: action.data,
      }
    case LOGOUT :
      localStorage.removeItem("brisca-session", null);
      return {
        ...state,
        login: null
      }
    default: return state;
  }
}

// Action Creators
export function login(data) {
  return { type: LOGIN, data };
}
export function logout() {
  return { type: LOGOUT };
}