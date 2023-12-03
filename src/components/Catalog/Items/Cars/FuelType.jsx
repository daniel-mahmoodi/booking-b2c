import React, { useEffect, useState } from "react";
import classes from "./DropDown.module.css";
const FuelType = ({ filterSelected, itemType, data, ItemsName, field }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log("data", isOpen);

  const hideDropdown = () => setOpen(false);
  const shwoDropdown = () => setOpen(true);
  const handleItemClick = (event) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === event.id ? null : event.id
    );
    hideDropdown();
  };

  useEffect(() => {
    filterSelected(itemType, selectedItem);
  }, [itemType, selectedItem]);

  return (
    <div
      className={classes.body}
      // onClick={() => setOpen((prev) => !prev)}
      onMouseOut={hideDropdown}
      onMouseOver={shwoDropdown}
    >
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader}>
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
