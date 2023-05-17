import React from 'react'
import Navbar from "../Components/Navbar";
function login() {
  return (
    <>
      <Navbar/>
      <div className="login_formParentContainer">
      <div className="login_container">
        <div className="login_title">Enter Credentials To Login</div>
        <form className="login_addItemForm" action="#">
          <div className="login_user__details">
            <div className="login_input__box">
              <span className="login_details">Username</span>
              <input
                className="login_addItemFormInput"
                type="text"
                placeholder="Enter Username Here"
                required
              />
            </div>
            <div className="login_input__box">
              <span className="login_details">Password</span>
              <input
                className="login_addItemFormInput"
                type="password"
                placeholder="Enter Password Here"
                required
              />
            </div>
          </div>
          <div className='form_switch_container'>
            Don't Have an Account?&nbsp; <a href="/register">Sign Up</a>
          </div>
          <div className="login_formbutton">
            <input
              className="login_addItemFormInput"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default login