import React, { Fragment } from "react";
import classes from "./SansesType.module.css";
const ServiceSection = ({
  userSelectedSanses,
  toggleDropDown,
  showDropDown,
  sansSelectedTitle,
  handleSansSelected,
}) => {
  return (
    <Fragment>
      {userSelectedSanses.length ? (
        <div className={classes.serviceBody}>
          <div className={classes.serviceButton} onClick={toggleDropDown}>
            {sansSelectedTitle ? (
              sansSelectedTitle
            ) : (
              <>
                انتخاب سرویس
                <ion-icon name="chevron-down-outline"></ion-icon>
              </>
            )}
          </div>
          <ul
            className={`${classes.dropdownMenu} ${
              showDropDown ? classes.dropdownMenuShow : ""
            }`}
          >
            {userSelectedSanses.map((item) => (
              <li
                className={classes.sansList}
                onClick={() => handleSansSelected(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ServiceSection;
