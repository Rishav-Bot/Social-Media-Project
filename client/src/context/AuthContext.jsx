import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer.jsx";

// Initial state for the authentication context
const initialState = {
  user:
  {
    _id: "65a258da674abc1e877cc0a5",
    username: "aditya",
    email: "aditya@mail.com",
    password: "$2b$10$3mCv17NXEiF1ue5bWpbbbO5kL8LMIget6ozS2ZXdcRZaEHTjoCJNS",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

// Creating the authentication context
export const AuthContext = createContext(initialState);

// AuthProvider component to wrap the application and provide the context
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
