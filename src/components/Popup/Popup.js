import React from "react";
import Modal from "react-modal";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Popup.css";

function Popup({ obj, modal, setModal, curr, setCurr }) {
  return (
    <div className="model">
      <Modal
        ariaHideApp={false}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.9)",
          },
          content: {
            backgroundColor: "black",
            height: "40vw",
            width: "35vw",
            borderRadius: 30,
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            WebkitAnimation:
              "animate 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards",
          },
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="popup-left-button">
            <ArrowBackIosIcon
              onClick={() =>
                curr === 0 ? setCurr(obj.length - 1) : setCurr(curr - 1)
              }
              style={{ fontSize: "50px" }}
            />
          </div>
          <img
            className="popup-image"
            src={obj[curr]?.urls.regular}
            alt={curr?.alt_description}
          />
          <div className="popup-right-button">
            <ArrowForwardIosIcon
              onClick={() =>
                curr === obj.length - 1 ? setCurr(0) : setCurr(curr + 1)
              }
              style={{ fontSize: "50px" }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
