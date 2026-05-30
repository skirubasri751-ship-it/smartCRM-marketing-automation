import React, { useState } from "react";

import API from "../api";

import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
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

      const res = await API.post(

        "/auth/register",

        formData
      );

      alert(res.data.message);

      navigate("/");

    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Registration Failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1 className="auth-title">
          Register
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
            Register
          </button>

        </form>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "white"
          }}
        >
          Already have an account?

          <Link
            to="/"
            style={{
              color: "#ff003c",
              marginLeft: "5px"
            }}
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;