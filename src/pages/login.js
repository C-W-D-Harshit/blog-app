import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import cookie from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      console.log(response.data);
      cookie.set("token", response.data.token);
      cookie.set("user_name", response.data.user.username);
      cookie.set("user_email", response.data.user.email);
      cookie.set("user_role", response.data.user.role);
      cookie.set("user", response.data.user);
      alert("Logged In successfully");
      router.push("/account");
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };
  return (
    <div className="signup">
      <div className="signup_">
        <form onSubmit={handleSubmit} className="signup__">
          <div className="signup_title">
            <p>Login:-</p>
          </div>

          <div className="signup_email">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="signup_email">
            <p>Password</p>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="ctas">
            <div className="signup_cta" onClick={handleSubmit}>
              <p>Login</p>
              <input
                type="submit"
                placeholder="Login"
                hidden
                onSubmit={() => handleSubmit()}
              />
            </div>
            <div className="signup_cta" onClick={() => router.push("/signup")}>
              <p>New?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
