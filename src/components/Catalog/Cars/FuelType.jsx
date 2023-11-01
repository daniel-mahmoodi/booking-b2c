import React, { useState } from "react";
import classes from "./DropDown.module.css";
const FuelType = ({ filterSelected, itemType, data, ItemsName, field }) => {
  console.log("data", data);
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
          {field
            ? selectedItem
              ? data.find((item) => item.id == selectedItem)[field]
              : ItemsName
            : selectedItem
            ? data.find((item) => item == selectedItem)
            : ItemsName}
          <i
            className={`fa fa-chevron-right ${classes.icon} ${
              isOpen && classes.open
            }`}
          ></i>
        </div>
        <div className={`${classes.dropdownBody} ${isOpen && classes.open}`}>
          {Object.keys(data).length ? (
            data.map((item) =>
              field ? (
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
                  {item[field]}
                </div>
              ) : (
                <div
                  key={item}
                  className={`${classes.dropdownItem} ${
                    item == selectedItem && classes.selected
                  }`}
                  onClick={(e) => handleItemClick(item, e.target)}
                  id={item}
                >
                  {/* <span
                className={`${classes.dropdownItemDot} ${
                  item.id == selectedItem && classes.selected
                }`}
              ></span> */}
                  {item}
                </div>
              )
            )
          ) : (
            <div className={classes.dropdownItem}>بدون آیتم</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuelType;
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
