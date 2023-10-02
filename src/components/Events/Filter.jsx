import React from "react";
import FilterItem from "./FilterItem";
import classes from "./Filter.module.css";

function Filter({ data }) {
  return (
    <div className="uk-container " style={{ padding: "30px 0" }}>
      <p style={{ fontWeight: 500 }} className="d-flex mx-2 ">
        جستجو بر اساس:
      </p>

      <div>
        <ul className={classes.body}>
          {data.map((item) => (
            <FilterItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
