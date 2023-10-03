import React, { useState } from "react";
import classes from "./FilterItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { catalogActions } from "../../../store/catalog-slice";
import { getServices } from "../../../store/event-action";
const FilterItem = ({ data }) => {
  const dispatch = useDispatch();
  const filterSelectedId = useSelector(
    (state) => state.catalog.filterSelectedId
  );

  const handleFilterSelected = () => {
    dispatch(catalogActions.addFilterItemId(data.id));
    dispatch(getServices(data.id));
  };
  return (
    <li onClick={handleFilterSelected}>
      <label className="filter-item">
        <input type="radio" name="filter" />
        <span
          className={`${classes.body} ${
            data.id === filterSelectedId && classes.active
          }`}
        >
          {data.catalogName}
        </span>
      </label>
    </li>
  );
};

export default FilterItem;
