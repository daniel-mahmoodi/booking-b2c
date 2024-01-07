import { useDispatch } from "react-redux";
import { getSanses, getServiceDetails } from "../../store/event-action";
import { eventActions } from "../../store/event-slice";

export function useSubmitOrder(id) {
  const dispatch = useDispatch();

  const submitOrder = () => {
    dispatch(getServiceDetails(id));
    dispatch(getSanses(id));
    dispatch(eventActions.toggleTicketComponent(false));
  };

  return { submitOrder };
}
