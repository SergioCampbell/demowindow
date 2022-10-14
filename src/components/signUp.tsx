import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import eye from "@assets/eye.svg";

import { user } from "../interface/interface";

export default function SignUp(props: user) {
  const [country, setCountry] = useState([]);

  const [newUser, setNewUser] = useState([
    {
      email: props.email,
      password: props.password,
      retypePassword: props.retypePassword,
      country: props.country,
      languaje: props.languaje,
    },
  ]);

  const onSubmitChange = (event: any) => {
    event.preventDefault();
    console.log(newUser);
    console.log("This function will create many users soon 😇");
  };

  const onHandleChange = (event: any) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const TEMPAPI: any = process.env.TEMPAPI; //dev environment
  const API: any = process.env.API; //production environment

  const fetchApi = async () => {
    try {
      const response = await fetch(TEMPAPI);
      const data = await response.json();
      setCountry(data.countries);
    } catch (error) {
      console.log("‼️ Error in fetch: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="signup__form--container">
      <Header />
      <h2 className="signup__form--title">Create your account</h2>
      <form className="signup__form--wapper" onSubmit={onSubmitChange}>
        <input
          className="signup__form--input"
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
          <img src={eye} className="signup__form--icon" />
        </div>
        <div className="signup__form--input-check">
          <input
            className="signup__form--password"
            placeholder="retypePassword"
            type="password"
            name="retypePassword"
            onChange={onHandleChange}
          />
          <img src={eye} className="signup__form--icon" />
        </div>

        <select
          id="country"
          name="country"
          className="signup__form--select"
          defaultValue="Country of residence"
          onChange={onHandleChange}
        >
          {country &&
            country.length > 0 &&
            country.map((item: any) => (
              <option
                className="signup__form--select-option-multiple"
                value={item.name_en}
                key={item.name_en}
              >
                {item.name_en}
              </option>
            ))}
        </select>

        <select
          id="languaje"
          name="languaje"
          className="signup__form--select"
          defaultValue="Spanish"
          onChange={onHandleChange}
        >
          <option className="signup__form--select-option" value="English">
            English
          </option>
          <option className="signup__form--select-option" value="Spanish">
            Spanish
          </option>
        </select>

        <div className="signup__form--label">
          <input
            type="radio"
            name="radio"
            className="signup__form--radial"
            value="Remember me"
          />
          <p className="signup__form--radial-value">
            By continuing I agree to the &nbsp;
            <a className="signup__form--color" href="#">
              Terms of Services
            </a>{" "}
            &nbsp; and &nbsp;
            <a className="signup__form--color" href="#">
              Privacy Policy
            </a>
          </p>
        </div>

        <button
          className="signup__form--button"
          type="submit"
          onClick={() => {}}
        >
          Sign up
        </button>
      </form>
      <hr />
      <Footer
        messageOne="Have an account?"
        fLink="Log in"
        messageTwo="instead."
      />
    </div>
  );
}
