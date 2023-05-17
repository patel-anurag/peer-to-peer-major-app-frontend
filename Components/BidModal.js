import ReactModal from "react-modal";
import BidsData from "../bidsData.json";
import { useState } from "react";
const BidModal = ({ isOpen, closeModal, product }) => {
  const [name,setName] = useState("");
  const [bid,setBid] = useState("");
  const handleSubmit = () => {
    const BidsDataArr = BidsData;
    const { id } = product;
    const p = BidsDataArr.find((child) => child.id === id);
    const bids = p.bids;
    const time = new Date().toLocaleString();
    const newBid = {
      id: bids.length + 1,
      name,
      bid,
      time,
    };
    const newBids = [...bids, newBid];
    BidsDataArr.map((child) => {
      if (child.id === id) {
        child.bids = newBids;
      }
    });
    const content = BidsDataArr;
    fetch('/api/writeFile', {
      method: 'POST',
      body: JSON.stringify(content),
    })
      .then((response) => {
        console.log({response})
        if (!response.ok) {
          throw new Error('Error writing file.');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
    // closeModal();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="BidModal"
    >
      <h2>Bidding Details for - {product.title}</h2>
      <p>Current Price: {product.price}</p>
      <form className="login_addItemForm" action="#">
        <div className="login_user__details">
          <div className="login_input__box">
            <span className="login_details">Full Name</span>
            <input
              className="login_addItemFormInput"
              type="text"
              placeholder="Enter Full Name Here"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login_input__box">
            <span className="login_details">Bid Price</span>
            <input
              className="login_addItemFormInput"
              type="number"
              placeholder="Enter Your Bid Price Here"
              required
              onChange={(e) => setBid(e.target.value)}
            />
          </div>
        </div>
        <div className="login_formbutton">
          <input
            className="login_addItemFormInput"
            type="button"
            onClick={handleSubmit}
            value="Confirm Bid"
          />
        </div>
      </form>
    </ReactModal>
  );
};

export default BidModal;
