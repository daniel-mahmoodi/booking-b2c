import React from "react";
import PrintTicketsList from "./PrintTicketsList";
import { Fragment } from "react";

const PrintPage = () => {
  return (
    <Fragment>
      <PrintTicketsList />
      <button onClick={() => window.print()}>Print</button>
    </Fragment>
  );
};

export default PrintPage;
