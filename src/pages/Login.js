import { useState } from "react";
export default function Login() {
  const [loginForm, setLoginForm] = useState({ UCID: "", password: "" });

  const handleFormChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginForm({
      UCID: "",
      password: "",
    });
    // make api calls to access user credential
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
        <p>Don't have an account yet? Sign up</p>
      </div>
    </div>
  );
}
