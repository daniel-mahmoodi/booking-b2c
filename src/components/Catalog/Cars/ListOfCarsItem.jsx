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
  const pageNumber = useSelector((state) => state.catalog.pageNumber);
  const pageSize = useSelector((state) => state.catalog.pageSize);
  console.log("listOfCarsItem", listOfFilteredCars);
  useEffect(() => {
    dispatch(GetCars({ data: userCarFilters, pageNumber, pageSize }));
  }, [dispatch, pageNumber, pageSize, userCarFilters]);
  return (
    <div className={classes.body}>
      {listOfFilteredCars.data?.length ? (
        <div className={classes.carItems}>
          {listOfFilteredCars.data?.map((item) => (
            <CarItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div>
          {/* <div  className={classes.noCotentIcon}></div> */}
          <p className={classes.noCotentTitle}>خودرویی یافت نشد</p>
        </div>
      )}
    </div>
  );
};

export default ListOfCarsItem;
