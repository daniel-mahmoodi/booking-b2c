import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../../store/catalog-action";
import Classes from "./Classes";
import Models from "./Models";
import GearTypes from "./GearTypes";
import FuelTypes from "./FuelTypes";
import LoadCapacity from "./LoadCapacity";
import PeopleCapacity from "./DropDown";
import styles from "./Cars.module.css";
import DropDown from "./DropDown";
import ListOfCarsItem from "./ListOfCarsItem";
import { catalogActions } from "../../../store/catalog-slice";
const initialState = {
  classId: null,
  fuelType: null,
  isGearAutomatic: null,
  peopleCapacity: null,
  loadCapacity: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        [action.filterName]: action.payload,
      };
    default:
      return state;
  }
};
const Cars = () => {
  const dispatch = useDispatch();
  const listOfCars = useSelector((state) => state.catalog.listOfCars);
  const [state, localDispatch] = useReducer(reducer, initialState);

  //   console.log("listOfCars", listOfCars);
  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  const addUserFiltersHandler = () => {
    dispatch(catalogActions.addUserCarFilters(state));
  };
  const handleFilterSelected = (name, value) => {
    //     const { name, value } = event.target;
    //     const file = event.target.files[0];
    localDispatch({
      type: "UPDATE_FILTER",
      filterName: name,
      payload: value,
    });
  };
  return (
    <div>
      <div>
        <div className={styles.body}>
          <DropDown
            filterSelected={handleFilterSelected}
            itemType={"classId"}
            data={listOfCars.classes}
            ItemsName={"سبک"}
          />
          {/* <DropDown
            filterSelected={handleFilterSelected}
            itemType={''}
            data={listOfCars.models}
            ItemsName={"مدل "}
          /> */}
          <DropDown
            filterSelected={handleFilterSelected}
            itemType={"isGearAutomatic"}
            data={listOfCars.gearTypes}
            ItemsName={"مدل دنده"}
          />
          <DropDown
            filterSelected={handleFilterSelected}
            itemType={"peopleCapacity"}
            data={listOfCars.peopleCapacity}
            ItemsName={"ظرفیت"}
          />
          <DropDown
            filterSelected={handleFilterSelected}
            itemType={"loadCapacity"}
            data={listOfCars.loadCapacity}
            ItemsName={"ظرفیت بار"}
          />
          <DropDown
            filterSelected={handleFilterSelected}
            itemType={"fuelType"}
            data={listOfCars.fuelTypes}
            ItemsName={"نوع موتور"}
          />
        </div>
        <button onClick={addUserFiltersHandler}>اعمال فیلتر</button>
      </div>
      <ListOfCarsItem />
    </div>
  );
};

export default Cars;
