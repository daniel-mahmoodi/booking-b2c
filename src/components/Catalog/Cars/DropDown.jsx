import React, { useState } from "react";
import classes from "./DropDown.module.css";
const DropDown = ({ filterSelected, itemType, data, ItemsName }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const hideDropdown = () => setOpen(false);
  const shwoDropdown = () => setOpen(true);

  const handleItemClick = (item, event) => {
    selectedItem == event.id
      ? setSelectedItem(null)
      : setSelectedItem(event.id);
    hideDropdown();
    filterSelected(itemType, item.id);
  };

  return (
    <div
      className={classes.body}
      onMouseOut={hideDropdown}
      onMouseOver={shwoDropdown}
    >
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader} onClick={hideDropdown}>
          {selectedItem
            ? data.find((item) => item.id == selectedItem).fuelName
            : ItemsName}
          <i
            className={`fa fa-chevron-right ${classes.icon} ${
              isOpen && classes.open
            }`}
          ></i>
        </div>
        <div className={`${classes.dropdownBody} ${isOpen && classes.open}`}>
          {data && Object.keys(data).length ? (
            data?.map((item) => (
              <div
                key={item.id}
                className={`${classes.dropdownItem} ${
                  item.id == selectedItem && classes.selected
                }`}
                onClick={(e) => handleItemClick(item, e.target)}
                id={item.id}
              >
                {/* <span
                className={`${classes.dropdownItemDot} ${
                  item.id == selectedItem && classes.selected
                }`}
              ></span> */}
                {item.fuelName}
              </div>
            ))
          ) : (
            <div className={classes.dropdownItem}>بدون آیتم</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
// return (
//      <div>
//        <div className={classes.dropdown}>
//          <button className={classes.dropbtn}>
//            {ItemsName}
//            <ion-icon name="chevron-down-outline"></ion-icon>
//          </button>
//          <div className={classes.dropdownContent}>
//            {data?.map((item) => (
//              <div>{item.id}</div>
//            ))}
//          </div>
//        </div>
//      </div>
//    );
//  };
