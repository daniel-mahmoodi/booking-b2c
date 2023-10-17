import React from "react";
import classes from "./Sequences.module.css";
import SequenceSections from "./SequenceSections/SequenceSections";
import { useModal } from "../Hook/useModal";
import HeaderOfSequence from "./HeaderOfSequence";
const Sequence = () => {
  const { toggleModal } = useModal();
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.closeParent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
        </div>
        <HeaderOfSequence />
        <div className={classes.details}>
          <SequenceSections />
        </div>
      </div>
    </div>
  );
};

export default Sequence;
