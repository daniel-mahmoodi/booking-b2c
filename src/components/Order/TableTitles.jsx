import React from "react";
import classes from "./TableTitles.module.css";
const TableTitles = () => {
  return (
    <div className={classes.body}>
      {/* <div className={classes.rowNumbersitem}>ردیف</div> */}
      <div className={classes.item}>تاریخ</div>
      <div className={classes.item}>مبلغ</div>
      <div className={classes.item}>روش پرداخت</div>
      {/* <div className={classes.item}>درگاه</div> */}
      <div className={classes.item}>وضعیت پرداخت</div>
      <div className={classes.item}>وضعیت سفارش</div>
    </div>
  );
};

export default TableTitles;
