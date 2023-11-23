import React, { useState } from "react";
import classes from "./DropDown.module.css";
import { useEffect } from "react";

const Models = ({ data, filterSelected, itemType, ItemsName }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [header, setHeader] = useState(ItemsName);

  const hideDropdown = () => setOpen(false);
  const shwoDropdown = () => setOpen(true);

  const handleItemClick = (item, event) => {
    selectedItem == event.id
      ? setSelectedItem(null)
      : setSelectedItem(event.id);
    hideDropdown();
    filterSelected(itemType, item.id);
  };

  useEffect(() => {
    if (selectedItem) {
      const selectedItemWithFullNameAndId = data.find(
        (item) => item.id == selectedItem
      );
      const selectedItemDesc = `${selectedItemWithFullNameAndId.brandName} ${selectedItemWithFullNameAndId.modelName}`;
      setHeader(selectedItemDesc);
    } else {
      setHeader(ItemsName);
    }
  }, [ItemsName, data, selectedItem]);
  return (
    <div
      className={classes.body}
      onMouseOut={hideDropdown}
      onMouseOver={shwoDropdown}
    >
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader} onClick={hideDropdown}>
          {header}

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
                onClick={(e) => handleItemClick(item, e.target)}
                id={item.id}
              >
                {/* <span
                className={`${classes.dropdownItemDot} ${
                  item.id == selectedItem && classes.selected
                }`}
              ></span> */}
                {`${item.brandName} ${item.modelName}`}
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

export default Models;
