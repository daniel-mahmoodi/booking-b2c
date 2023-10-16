import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import PricingNotificationBar from "./components/Order/PricingNotificationBar";
import PurchaseModal from "./components/Order/PurchaseModal";
import ShoppingCartModal from "./components/Order/ShoppingCartModal";
import Sequences from "./components/Sequences/Sequences";
import Login from "./components/Auth/LoginByPass";
import OffcanvasMenu from "./components/Navbar/OffcanvasMenu";
import Checkout from "./components/Order/Checkout";
import { useEffect } from "react";
import SequencesModal from "./components/Sequences/SequencesModal";
function App() {
  //https://takish724.ir/Payment/Success/False/PaymentId/19
  const showSideBar = useSelector((state) => state.ui.showSideBar);
  const showSequencesModal = useSelector(
    (state) => state.ui.showSequencesModal
  );
  const showCheckoutModal = useSelector((state) => state.ui.showCheckoutModal);
  const urlToPay = useSelector((state) => state.order.url);
  useEffect(() => {
    if (urlToPay) {
      setTimeout(() => {
        window.location.href = urlToPay;
      }, 5 * 1000);
    }
  }, [urlToPay]);
  return (
    <div className="App" dir="rtl">
      {/* <PurchaseModal /> */}
      {/* <ShoppingCartModal/> */}
      {/* <SequencesModal /> */}
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}
      {showCheckoutModal && <Checkout />}
      <MainPage />
    </div>
  );
}

export default App;
