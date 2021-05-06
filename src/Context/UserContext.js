import React from "react";
import { navigate} from "@reach/router";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        name: localStorage.name,
        email: localStorage.email,
        picture: localStorage.picture,
      };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("auth_token"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    picture: localStorage.getItem("picture"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

async function loginUser(dispatch, history, response) {
  localStorage.setItem("name", response.profileObj.name);
  localStorage.setItem("email", response.profileObj.email);
  localStorage.setItem("picture", response.profileObj.imageUrl);
  navigate("/profile");
  dispatch({ type: "LOGIN_SUCCESS" });
}

function signOut(dispatch, history) {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("picture");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  navigate("/");
}
