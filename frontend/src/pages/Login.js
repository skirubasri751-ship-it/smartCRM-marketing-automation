import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "http://localhost:5000/api/auth/login",

        formData
      );

      /* SAVE JWT TOKEN */

      localStorage.setItem(

        "token",

        res.data.token
      );

      /* SAVE USER */

      localStorage.setItem(

        "user",

        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Login Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1 className="auth-title">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white"
          }}
        >
          Don't have an account?

          <Link
            to="/register"
            style={{
              color: "#ff003c",
              marginLeft: "5px"
            }}
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;