import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarItem";
import { GetCars } from "../../../store/catalog-action";
import classes from "./ListOfCarsItem.module.css";
//{classId,fuelType,isGearAutomatic,peopleCapacity,loadCapacity}
const ListOfCarsItem = () => {
  const dispatch = useDispatch();
  const listOfFilteredCars = useSelector(
    (state) => state.catalog.listOfFilteredCars
  );
  const userCarFilters = useSelector((state) => state.catalog.userCarFilters);
  console.log("listOfCarsItem", listOfFilteredCars);
  useEffect(() => {
    dispatch(GetCars({ data: userCarFilters, pageNumber: 1, pageSize: 9 }));
  }, [dispatch, userCarFilters]);
  return (
    <div className={classes.body}>
      <div className={classes.carItems}>
        {listOfFilteredCars &&
          listOfFilteredCars.data?.map((item) => (
            <CarItem key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default ListOfCarsItem;