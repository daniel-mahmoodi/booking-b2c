import React from "react";
import { phoneNumber, takishEmail, persian } from "../../../locals/fa";
import classes from "./FooterDescriptions.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const FooterDescriptions = () => {
  return (
    <div className={classes.body}>
      <div className={classes.logo}>
        <Link to="/">
          <img className="" src="/assets/img/takish-logo.png" alt="تاکیش724" />
        </Link>
      </div>
      <p>{persian.footerDescriptions}</p>
      <ul>
        <li>
          <span>ایمیل: </span>
          <a href={`mailto:${takishEmail}`}>{takishEmail}</a>
        </li>
        <li>
          <span>ارتباط با پشتیبانی:</span>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterDescriptions;
