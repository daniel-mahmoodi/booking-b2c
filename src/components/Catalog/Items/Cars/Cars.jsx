import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./Classes";
import Models from "./Models";
import GearTypes from "./GearTypes";
import FuelTypes from "./FuelTypes";
import LoadCapacity from "./LoadCapacity";
import PeopleCapacity from "./FuelType";
import classes from "./Cars.module.css";
import DropDown from "./FuelType";
import ListOfCarsItem from "./ListOfCarsItem";
import Capacity from "./Capacity";
import FuelType from "./FuelType";
import { getFilters } from "../../../../store/catalog-action";
import { catalogActions } from "../../../../store/catalog-slice";

const initialState = {
  classIds: [],
  modelId: null,
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
  console.log("state", state);
  useEffect(() => {
    dispatch(getFilters());
  }, [dispatch]);

  const addUserFiltersHandler = () => {
    dispatch(catalogActions.addUserCarFilters(state));
  };
  const handleFilterSelected = (name, value) => {
    localDispatch({
      type: "UPDATE_FILTER",
      filterName: name,
      payload: value,
    });
  };
  return (
    <div>
      {Object.keys(listOfCars).length ? (
        <div className={classes.body}>
          <div className={classes.items}>
            <Classes
              filterSelected={handleFilterSelected}
              itemType={"classIds"}
              data={listOfCars.classes}
              ItemsName={"کلاس کاری"}
            />
            {/* <DropDown
            field=""
            filterSelected={handleFilterSelected}
            itemType={''}
            data={listOfCars.models}
            ItemsName={"مدل "}
          /> */}
            <GearTypes
              filterSelected={handleFilterSelected}
              itemType={"isGearAutomatic"}
              data={listOfCars.gearTypes}
              ItemsName={"مدل دنده"}
            />
            {/* <DropDown
            field="gearTitle"
              filterSelected={handleFilterSelected}
              itemType={"isGearAutomatic"}
              data={listOfCars.gearTypes}
              ItemsName={"مدل دنده"}
            /> */}
            <Models
              filterSelected={handleFilterSelected}
              itemType={"modelId"}
              data={listOfCars.models}
              ItemsName={"مدل و برند"}
            />
            <Capacity
              filterSelected={handleFilterSelected}
              itemType={"peopleCapacity"}
              data={listOfCars.peopleCapacity}
              ItemsName={"ظرفیت مسافر"}
            />
            <Capacity
              filterSelected={handleFilterSelected}
              itemType={"loadCapacity"}
              data={listOfCars.loadCapacity}
              ItemsName={"ظرفیت بار"}
            />
            <FuelType
              field="fuelName"
              filterSelected={handleFilterSelected}
              itemType={"fuelType"}
              data={listOfCars.fuelTypes}
              ItemsName={"نوع موتور"}
            />
          </div>
          <button className={classes.searchBtn} onClick={addUserFiltersHandler}>
            جستوجو
          </button>
        </div>
      ) : (
        ""
      )}
      <ListOfCarsItem />
    </div>
  );
};

export default Cars;
