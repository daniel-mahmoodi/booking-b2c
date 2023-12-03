import React, { useEffect, useState } from "react";
import classes from "./DropDown.module.css";

function Capacity({ data, filterSelected, itemType, ItemsName }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const hideDropdown = () => setOpen(false);
  const shwoDropdown = () => setOpen(true);

  // const handleItemClick = (item) => {
  //   selectedItem == item ? setSelectedItem(null) : setSelectedItem(item);
  //   hideDropdown();
  //   filterSelected(itemType, item);
  // };
  const handleItemClick = (item) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem ===item ? null :item
    );
    hideDropdown();
  };

  useEffect(() => {
    filterSelected(itemType, selectedItem);
  }, [ itemType, selectedItem]);


  return (
    <div
      className={classes.body}
      onMouseOut={hideDropdown}
      onMouseOver={shwoDropdown}
    >
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader} >
          {selectedItem
            ? data.find((item) => item == selectedItem)
            : ItemsName}
          <i
            className={`fa fa-chevron-right ${classes.icon} ${
              isOpen && classes.open
            }`}
          ></i>
        </div>
        {isOpen && (
          <div className={`${classes.dropdownBody} ${isOpen && classes.open}`}>
            {data.map((item) => (
              <div
                key={item}
                className={`${classes.dropdownItem} ${
                  item == selectedItem && classes.selected
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Capacity;
