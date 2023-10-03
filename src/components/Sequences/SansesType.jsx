import React, { useEffect, useState } from "react";

const SansesType = ({ listOfSanses }) => {
  const handleDaySelected = (id) => {
    console.log("item.executeDateTime", id);

    const dayExist = listOfSanses.map((item) => item.executeDateTime);
    console.log("dayExist", dayExist);
  };
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn rounded border border-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          انتخاب روز سرویس
        </button>
        <ul class="dropdown-menu">
          {listOfSanses.map((item) => (
            <li onClick={() => handleDaySelected(item.executeDateTime)}>
              {item.executeDateTime}
            </li>
          ))}
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn rounded border border-secondary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          انتخاب سانس
        </button>
        <ul class="dropdown-menu">
          {listOfSanses.map((item) => (
            <li>{item.executeDateTime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SansesType;
