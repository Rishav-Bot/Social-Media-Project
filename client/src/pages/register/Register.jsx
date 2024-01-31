import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value)
      passwordAgain.current.setCustomValidity("Passwords don't match");
    else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h2 className="registerLogo"> Meetup</h2>
          <span className="registerDesc">
            Connect with your friends all over the world through Meetup.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Username"
              required
              className="registerInput"
              ref={username}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="registerInput"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="registerInput"
              ref={password}
            />
            <input
              type="password"
              placeholder="Password Again"
              required
              className="registerInput"
              ref={passwordAgain}
            />
            <button className="registerButton" type="submit">
              Register
            </button>
            <button className="registerLoginButton">
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
