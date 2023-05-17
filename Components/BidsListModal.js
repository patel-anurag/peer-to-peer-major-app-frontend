import ReactModal from "react-modal";
import BidsData from "../bidsData.json";
import { useEffect, useState } from "react";
const BidModal = ({ isOpen, closeModal, product }) => {
  const [bidsData, setBidsData] = useState([]);
  useEffect(() => {
    const { id } = product;
    const p = BidsData.find((child) => child.id === id);
    setBidsData(p.bids);
  }, []);
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="BidModal"
    >
      <h2>Bids Data</h2>
      <div class="tablecontainer">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bid</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {bidsData &&
                bidsData.map((bid) => (
                  <tr>
                    <td>{bid.name}</td>
                    <td>{bid.bid}</td>
                    <td>{bid.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </ReactModal>
  );
};

export default BidModal;
