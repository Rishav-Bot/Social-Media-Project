import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  useContext;
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="loginLogo"> Meetup</h2>
          <span className="loginDesc">
            Connect with your friends all over the world through Meetup.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" /> : "Log in"}
            </button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" />
              ) : (
                "Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
