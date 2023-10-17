import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export function useModal() {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(uiActions.toggleSansesModal(false));
  };

  return { toggleModal };
}
