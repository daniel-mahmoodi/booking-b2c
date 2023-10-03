import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import PricingNotificationBar from "./components/Order/PricingNotificationBar";
import PurchaseModal from "./components/Order/PurchaseModal";
import ShoppingCartModal from "./components/Order/ShoppingCartModal";
import Sequences from "./components/Sequences/Sequences";
import Calendar from "./components/Layout/Calendars";

function App() {
  const showSequencesModal = useSelector(
    (state) => state.event.showSequencesModal
  );
  return (
    <div className="App" dir="rtl">
      {/* <PurchaseModal /> */}
      {/* <ShoppingCartModal/> */}
      <Calendar/>
      {showSequencesModal && <Sequences />}
      <MainPage />
    </div>
  );
}

export default App;
