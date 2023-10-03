import React from "react";
import classes from "./Sans.module.css";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../store/event-slice";
const Sans = ({ sansData }) => {
  const dispatch = useDispatch();
  const selectedSansData = useSelector((state) => state.event.selectedSansData);

  const HandleSelectedSansData = () => {
    dispatch(eventActions.addSelectedSansData(sansData));
  };
  return (
    <div
      onClick={HandleSelectedSansData}
      className={`${classes.body} ${
        selectedSansData.id === sansData.id ? classes.active : ""
      }`}
    >
      <div>{sansData.title}</div>
    </div>
  );
};

export default Sans;
