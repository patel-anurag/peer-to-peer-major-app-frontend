import React from "react";
import Navbar from "../Components/Navbar";
function additem() {
  return (
    <>
    <Navbar/>
      <div className="formParentContainer">
      <div class="container">
        <div class="title">Add New Item</div>
        <form className="addItemForm" action="#">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Item Name</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. Maruti Suzuki Alto"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Year Of Buy</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. 2000"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Bidding Price</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. ₹ 20000"
                required
              />
            </div>
          </div>
          <div class="textarea-container">
            <span class="details">Describe your order</span>
            <textarea class="textarea" placeholder="Enter Here"></textarea>
          </div>
          <div class="user__details">
            <div class="input__box" style={{marginTop:"20px !important"}}>
              <span class="details">Item Image</span>
              <input className="" type="file" required />
            </div>
          </div>
          <div class="formbutton">
            <input
              className="addItemFormInput"
              type="submit"
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default additem;
