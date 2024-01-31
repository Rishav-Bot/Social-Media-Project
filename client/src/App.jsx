import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Register from "./pages/register/Register.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext.jsx";
import { useContext } from "react";


const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ user ? <Home /> : <Register />} />
          <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
