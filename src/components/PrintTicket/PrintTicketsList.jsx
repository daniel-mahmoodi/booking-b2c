import React from "react";
import Descriptions from "./Descriptions";
import TicketDescriptions from "./TicketsDescriptions";
import Stump from "./Stump";
import AdditionalInfo from "./AdditionalInfo";
import Tickets from "./Tickets";
import "./Tickets.css";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const PrintTicketsList = () => {
  const orderTicketsDetails = useSelector(
    (state) => state.order.orderTicketsDetails
  );
  console.log("orderTicketsDetails", orderTicketsDetails);
  return (
    <div
      className="all"
      style={{ maxWidth: "1000px", margin: "10px auto", padding: "0 10px" }}
    >
      <TicketDescriptions />
      <Descriptions />
      <Tickets />
      <AdditionalInfo />
      <Stump />
      <Pagination />
    </div>
  );
};

export default PrintTicketsList;
