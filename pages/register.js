import React, { useState } from "react";
import Navbar from "../Components/Navbar";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [panNo, setPanNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here
    // You can access the form data using the state values
    console.log("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <div className="register_formParentContainer">
        <div className="login_container">
          <div className="login_title">Enter Details To Register</div>
          <form className="login_addItemForm" onSubmit={handleSubmit}>
            <div className="login_user__details">
              <div className="login_input__box">
                <span className="login_details">First Name:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter Username Here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Last Name:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter Password Here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Phone:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Email:</span>
                <input
                  className="login_addItemFormInput"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Password:</span>
                <input
                  className="login_addItemFormInput"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Confirm Password:</span>
                <input
                  className="login_addItemFormInput"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter Confirm Password Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">City:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Address:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">PAN No:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  value={panNo}
                  onChange={(e) => setPanNo(e.target.value)}
                  placeholder="Enter PAN number Here"
                  required
                />
              </div>
            </div>
            <div className="form_switch_container">
              Already Have an Account?&nbsp; <a href="/login">Sign In</a>
            </div>
            <div className="login_formbutton">
              <input
                className="login_addItemFormInput"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
