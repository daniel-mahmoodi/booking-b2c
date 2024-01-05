import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./FooterImportanLinks.module.css";
import { takishBlogUrl } from "../../../locals/fa";
const FooterImportanLinks = () => {
  return (
    <div className={classes.body}>
      <div className={classes.listContainer}>
        <h3 className={classes.title}>با تاکیش 724</h3>
        <ul className={classes.list}>
          <a href={`${takishBlogUrl}`}>مجله تاکیش 724</a>
          <Link to="">درباره ما</Link>
          <Link to="">تماس با ما</Link>
          <Link to="">قوانین</Link>
        </ul>
      </div>
      <div className={classes.listContainer}>
        <h3 className={classes.title}>خدمات</h3>
        <ul className={classes.list}>
          <Link to="">سوالات متداول</Link>
          <Link to="">چطور یک سرویس را رزرو کنم؟</Link>
          <Link to="">شیوه ی شارژ کیف پول</Link>
          <Link to="">شیوه ی پرداخت</Link>
          <Link to="">حریم شخصی کاربران</Link>
        </ul>
      </div>
    </div>
  );
};

export default FooterImportanLinks;
