import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../../../store/event-action";
import classes from "./SequenceSections.module.css";
import CalendarSection from "./CalendarSection";
import ServiceSection from "./ServiceSection";
import TicketSection from "./TicketSection";
import ImageSection from "./ImageSection";
import AcceptTicket from "../AcceptTicket";
const SansesType = () => {
  const dispatch = useDispatch();
  const listOfSanses = useSelector((state) => state.event.listOfSanses);
  const showTicketComponent = useSelector(
    (state) => state.event.showTicketComponent
  );
  const ticketLoading = useSelector((state) => state.event.ticketLoading);
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  const [userSelectedSanses, setUserSelectedSanses] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [sansSelectedTitle, setSansSelectedTitle] = useState("");
  const [sansSelectedeventId, setSansSelectedeventId] = useState();

  const ticketDetails = useSelector((state) => state.event.ticketDetails);

  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const getDateHandler = (date) => {
    const dayExist = listOfSanses.find(
      (item) => item.executeDateTime.split("T")[0] === date
    );
    if (dayExist) {
      setUserSelectedSanses(dayExist.sansList);
    } else {
      setUserSelectedSanses([]);
    }
  };
  const handleSansSelected = (item) => {
    setSansSelectedTitle(item.title);
    setSansSelectedeventId(item.eventId);
    dispatch(getTicket(serviceDetails.id, item.id));
    toggleDropDown();
  };
  return (
    <Fragment>
      <div className={classes.body}>
        <ImageSection
          serviceName={serviceDetails.serviceName}
          imageUrl={serviceDetails.imageUrl}
          eventName={serviceDetails.eventName}
        />
        <CalendarSection
          getDateHandler={getDateHandler}
          userSelectedSanses={userSelectedSanses}
        />
        <ServiceSection
          userSelectedSanses={userSelectedSanses}
          toggleDropDown={toggleDropDown}
          showDropDown={showDropDown}
          sansSelectedTitle={sansSelectedTitle}
          handleSansSelected={handleSansSelected}
        />
        <TicketSection
          ticketLoading={ticketLoading}
          showTicketComponent={showTicketComponent}
          ticketDetails={ticketDetails}
          eventId={sansSelectedeventId}
          sansSelectedTitle={sansSelectedTitle}
        />
      </div>
      <AcceptTicket />
    </Fragment>
  );
};

export default SansesType;
