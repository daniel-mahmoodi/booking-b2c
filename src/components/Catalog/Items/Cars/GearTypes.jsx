import React, { useState } from "react";
import classes from "./DropDown.module.css";

const GearTypes = ({ data, filterSelected, itemType, ItemsName }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const toggleDropDown = () => setOpen((prev)=>!prev);
  const hideDropdown = () => setOpen(false);
  const shwoDropdown = () => setOpen(true);

  const handleItemClick = (item) => {
    selectedItem == item.id
      ? setSelectedItem(null)
      : setSelectedItem(item.id);
    hideDropdown();
    filterSelected(itemType, item.id);
  };

  return (
    <div
      className={classes.body}
      onMouseOut={hideDropdown}
      onMouseOver={shwoDropdown}
      // onClick={toggleDropDown}
      
    >
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader} onClick={hideDropdown}>
          {selectedItem
            ? data.find((item) => item.id == selectedItem).gearTitle
            : ItemsName}

          <i
            className={`fa fa-chevron-right ${classes.icon} ${
              isOpen && classes.open
            }`}
          ></i>
        </div>
        <div className={`${classes.dropdownBody} ${isOpen && classes.open}`}>
          {Object.keys(data).length ? (
            data.map((item) => (
              <div
                key={item.id}
                className={`${classes.dropdownItem} ${
                  item.id == selectedItem && classes.selected
                }`}
                onClick={() => handleItemClick(item)}
                id={item.id}
              >
                {/* <span
                className={`${classes.dropdownItemDot} ${
                  item.id == selectedItem && classes.selected
                }`}
              ></span> */}
                {item.gearTitle}
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

export default GearTypes;
