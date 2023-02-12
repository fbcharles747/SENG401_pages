import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../utils/API";
export default function Login(props) {
  const { setAuth } = props;
  const [loginForm, setLoginForm] = useState({ UCID: "", password: "" });
  const navigate = useNavigate();
  const handleFormChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // make the api call
    axios
      .get(
        `${LOGIN_URL}Account?UCID=${loginForm.UCID}&password=${loginForm.password}`
      )
      .then((res) => {
        const userAuth = res.data;
        setAuth({
          ...userAuth,
          IsValid: true,
        });
      })
      .then(() => navigate("/"))
      .catch((err) => console.error(err));

    setLoginForm({
      UCID: "",
      password: "",
    });
  };
  return (
    <div className="login">
      <div className="form-wrapper">
        <span className="logo">Uflourish</span>
        <span className="form-title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="UCID"
            name="UCID"
            value={loginForm.UCID}
            onChange={handleFormChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={loginForm.password}
            onChange={handleFormChange}
          />

          <button>Login</button>
        </form>
        <p>
          Don't have an account yet? <Link to="/SignUp">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
