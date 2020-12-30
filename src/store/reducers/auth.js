import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../untility";

const intialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/",
};

const setAuthRedirectPath = (state, action) => {
  console.log(action.path);
  return updateObject(state, {
    authRedirectPath: action.path,
  });
};

const authStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const authSucess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = intialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCESS:
      return authSucess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
