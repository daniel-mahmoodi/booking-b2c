import React from "react";
import { instagramLink } from "../../../locals/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-regular-svg-icons";
const MiddleFooter = () => {
  return (
    <div>
      <h3>شبکه های اجتماعی</h3>
      <ul>
        <li>
          <a href={`${instagramLink}`}>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MiddleFooter;
