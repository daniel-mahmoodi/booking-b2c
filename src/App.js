import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import PricingNotificationBar from "./components/Order/PricingNotificationBar";
import PurchaseModal from "./components/Order/PurchaseModal";
import ShoppingCartModal from "./components/Order/ShoppingCartModal";
import Sequences from "./components/Sequences/Sequences";
import Login from "./components/Auth/Login";

function App() {
  const showSequencesModal = useSelector(
    (state) => state.event.showSequencesModal
  );
  return (
    <div className="App" dir="rtl">
      {/* <PurchaseModal /> */}
      {/* <ShoppingCartModal/> */}

      {showSequencesModal && <Sequences />}
      
      <MainPage />
    </div>
  );
}

export default App;
