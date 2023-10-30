import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarItem";
import { GetCars } from "../../../store/catalog-action";
//{classId,fuelType,isGearAutomatic,peopleCapacity,loadCapacity}
const ListOfCarsItem = () => {
  const dispatch = useDispatch();
  const listOfCarsItem = useSelector((state) => state.catalog.listOfCarsItem);
  const userCarFilters = useSelector((state) => state.catalog.userCarFilters);
  useEffect(() => {
    dispatch(GetCars({ data: userCarFilters, pageNumber: 1, pageSize: 9 }));
  }, [dispatch, userCarFilters]);
  return (
    <div>
      {listOfCarsItem?.map((item) => (
        <CarItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListOfCarsItem;
