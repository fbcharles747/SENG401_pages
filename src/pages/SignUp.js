import { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({
    ucid: "",
    firstName: "",
    lastName: "",
    password: "",
    birthDate: "",
    email: "",
    address: "",
    pin: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    //make api calls here
  };

  return (
    <div className="signUp">
      <div className="form-wrapper">
        <span className="logo">Uflourish</span>
        <span className="form-title">Sign up</span>
        <form onSubmit={handleSubmit} className="signUp-form">
          <input
            type="text"
            id="ucid"
            name="ucid"
            value={formData.ucid}
            onChange={handleChange}
            placeholder="UCID"
          />

          <div className="first-last-name-field">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="first name"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="last name"
            />
          </div>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />

          <label htmlFor="birthDate">Birth Date:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            placeholder="birth date"
          />

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pin">Pin:</label>
            <input
              type="text"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}
