import React from "react";
import { useHistory } from "react-router-dom";

const GoForPrint = () => {
  const history = useHistory();
  const sendUserToNewPageForPrintingHandler = () => {
    history.push("/print-page");
  };
  return (
    <button onClick={sendUserToNewPageForPrintingHandler}>GoForPrint</button>
  );
};

export default GoForPrint;
