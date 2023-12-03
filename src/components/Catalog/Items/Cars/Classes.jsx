import React, { useEffect } from "react";
import classes from "./DropDown.module.css";
import { useState } from "react";
const Classes = ({ data, filterSelected, itemType, ItemsName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selecteditems, setSelecteditems] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleitemClick = (item) => {
    if (selecteditems.includes(item)) {
      setSelecteditems(
        selecteditems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelecteditems([...selecteditems, item]);
    }
  };
  useEffect(() => {
    const items = [];
    selecteditems.map((item) => items.push(item.id));
    filterSelected(itemType, items);
  }, [selecteditems]);

  return (
    <div className={classes.body}>
      <div className={classes.dropdown}>
        <div className={classes.dropdownHeader} onClick={toggleDropdown}>
          {ItemsName}
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
                key={item.id}
                className={`${classes.dropdownItem} ${
                  selecteditems.includes(item) ? classes.selected : ""
                }`}
                onClick={() => handleitemClick(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Classes;
