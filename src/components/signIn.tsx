import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";

import eye from '@assets/eye.svg';

import { user } from "../interface/interface";

export default function SignIn(props: user) {
  const [oldUser, setOldUser] = useState([{
    email: props.email,
    password: props.password,
    retypePassword: props.retypePassword,
    country: props.country,
    languaje: props.languaje
}])
  const onSubmitChange = (event: any) => {
    event.preventDefault();
    console.log(oldUser)
    console.log('This function will submit something soon 🥴')
  }

  const onHandleChange = (event: any) => {
    setOldUser({
        ...oldUser,
        [event.target.name] : event.target.value
    })
  }

  return (
    <div className="signIn__form--container">
        <Header />
      <h2 className="signIn__form--title">Welcome Back</h2>
      <form className="signIn__form--wapper" onSubmit={onSubmitChange}>
        <input
          className="signIn__form--input"
          placeholder="Email"
          type="email"
          name="email"
          onChange={onHandleChange}
        />
        <div className="signup__form--input-check">
        <input
          className="signup__form--password"
          placeholder="password"
          type="password"
          name="password"
          onChange={onHandleChange}
        />
        <img src={eye} className="signup__form--icon"/>
        </div>

        <div className="signIn__form--label">
          <a href="#" className="signIn__form--color">
            Forgot Password
          </a>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              className="signIn__form--radial"
              value="Remember me"
            />
            <span className="signIn__form--radial-value">Remember me</span>
          </div>
        </div>

        <button className="sigIn__form--button" type="submit" onClick={() => {}}>Log In</button>
      </form>
      <hr />
      <Footer messageOne="Don't have an account?" fLink="Sign up" messageTwo="instead." />
    </div>
  );
}
