import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";

export default function Login({ setSuccess, setUsername, addToCookie }) {
  const [isLogIn, setIsLogIn] = useState(true);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const logIn = async () => {
    try {
      const res = await axios.post("http://43.206.242.45:8080/v1/users/login", {
        username: formik.values.username,
        password: formik.values.password,
      });
      setSuccess(true);
      // setUsername(res.data.Username);
      console.log(res.data);
      addToCookie(res.data.username);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    }
  };

  const register = async () => {
    try {
      await axios.post("http://43.206.242.45:8080/v1/users/register", {
        username: formik.values.username,
        password: formik.values.password,
        email: formik.values.email,
      });
      setIsLogIn(true);
    } catch (error) {
      setIsLogIn(false);
      console.log(error);
    }
  };

  console.log(formik.values);
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">
          {isLogIn ? "Please log in" : "Please sign up"}
        </h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Firstname"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="password">Password</label>
        </div>
        {!isLogIn && (
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="email">Email</label>
          </div>
        )}
        {isLogIn ? (
          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            onClick={logIn}
            type="button"
          >
            Sign in
          </button>
        ) : (
          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            onClick={register}
            type="button"
          >
            Sign up
          </button>
        )}
      </form>
      {isLogIn ? (
        <p className="mt-3">
          If you are new please &nbsp;
          <button
            className="btn text-primary p-0"
            onClick={() => setIsLogIn(false)}
          >
            Sign up
          </button>
        </p>
      ) : (
        <p className="mt-3">
          If you have already have an account please &nbsp;
          <button
            className="btn text-primary p-0"
            onClick={() => setIsLogIn(true)}
          >
            Sign in
          </button>
        </p>
      )}
    </main>
  );
}
