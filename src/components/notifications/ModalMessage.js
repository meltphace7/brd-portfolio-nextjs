import React from "react";
import Modal from "../modal/Modal";
import classes from "./ModalMessage.module.css";

const ModalMessage = (props) => {
  const closeModalHandler = () => {
    props.onClose();
  };
  console.log(props.message);
  console.log("hello");
  return (
    <Modal onCloseModal={closeModalHandler}>
      <div className={classes.background}>
        <h2 className={classes.message}>{props.message}</h2>
        <button onClick={closeModalHandler} className={classes["ok-btn"]}>
          OK
        </button>
      </div>
    </Modal>
  );
};

export default ModalMessage;
