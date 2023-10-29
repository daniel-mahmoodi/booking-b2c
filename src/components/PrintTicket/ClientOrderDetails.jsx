import React from "react";
import { Fragment } from "react";
import Descriptions from "./Descriptions";
import TicketDescriptions from "./TicketsDescriptions";
import Stump from "./Stump";
import AdditionalInfo from "./AdditionalInfo";
import ClientTicket from "./ClientTicket";
import Pagination from "./Pagination";

const ClientOrderDetails = ({ data }) => {
  return (
    <Fragment>
      <TicketDescriptions
        clientMobile={data.clientMobile}
        clientName={data.clientName}
        eventTitle={data.eventTitle}
      />
      <Descriptions termOfUse={data.termOfUse} description={data.description} />
      {data.tickets?.map((item) => (
        <ClientTicket
          key={item.id}
          data={item}
          eventExcecuteDateTime={data.eventExcecuteDateTime}
          eventExcecuteTime={data.eventExcecuteTime}
          clientMobile={data.clientMobile}
        />
      ))}
      <Stump />
      <AdditionalInfo />
      <Pagination />
      
    </Fragment>
  );
};

export default ClientOrderDetails;
