import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <>
      <Navbar />
      <div className="login_formParentContainer">
        <div className="login_container">
          <div className="login_title">Enter Credentials To Login</div>
          <form className="login_addItemForm" action="#">
            <div className="login_user__details">
              <div className="login_input__box">
                <span className="login_details">Email</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter Email Here"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Password</span>
                <input
                  className="login_addItemFormInput"
                  type="password"
                  placeholder="Enter Password Here"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form_switch_container">
              Don't Have an Account?&nbsp; <a href="/register">Sign Up</a>
            </div>
            <div className="login_formbutton">
              <input
                className="login_addItemFormInput"
                type="submit"
                value="Login"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default login;
