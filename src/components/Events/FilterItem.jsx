import React, { useState } from "react";
import classes from "./FilterItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { catalogActions } from "../../store/catalog-slice";
const FilterItem = ({ data }) => {
  const dispatch = useDispatch();
  const filterSelectedId = useSelector(
    (state) => state.catalog.filterSelectedId
  );

  const filterSelected = () => {
    dispatch(catalogActions.addFilterItemId(data.id));
  };
  return (
    <li className="shine">
      <button
        className={`${classes.body} ${
          data.id === filterSelectedId && classes.active
        }`}
        onClick={filterSelected}
      >
        {data.catalogName}
      </button>
    </li>
  );
};

export default FilterItem;
