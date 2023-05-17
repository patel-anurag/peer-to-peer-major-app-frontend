import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [currentaddress,setCurrentAddress] = useState("");
  const [permanentaddress,setPermanentAddress] = useState("");
  const [pan,setPan] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newData = {
      name,
      email,
      password,
      phone,
      currentaddress,
      permanentaddress,
      pan,
      city,
      state
    };
    console.log("newData",newData);
    const response = await axios("http://localhost:3001/register",newData);
    // if(response){
      
    // }
  };

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setCurrentAddress("");
    setPermanentAddress("");
    setPan("");
    setCity("");
    setState("");
  }, []);

  return (
    <>
      <Navbar />
      <div className="register_formParentContainer">
        <div className="login_container">
          <div className="login_title">Enter Details To Register</div>
          <form className="login_addItemForm" onSubmit={handleSubmit}>
            <div className="login_user__details">
              <div className="login_input__box">
                <span className="login_details">Full Name:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  placeholder="Enter Full Name Here"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Password:</span>
                <input
                  className="login_addItemFormInput"
                  type="password"
                  placeholder="Enter Password Here"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Phone:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Current Address:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setCurrentAddress(e.target.value)}
                  placeholder="Enter Current Address Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">Permanent Address:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setPermanentAddress(e.target.value)}
                  placeholder="Enter Permanent Address Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">City:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">State:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter State Here"
                  required
                />
              </div>
              <div className="login_input__box">
                <span className="login_details">PAN No:</span>
                <input
                  className="login_addItemFormInput"
                  type="text"
                  onChange={(e) => setPan(e.target.value)}
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
