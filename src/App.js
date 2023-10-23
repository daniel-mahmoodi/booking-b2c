import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import Sequences from "./components/Sequence/Sequence";
import OffcanvasMenu from "./components/Navbar/OffcanvasMenu";
import Checkout from "./components/Order/Checkout";
import { useEffect } from "react";
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

  useEffect(() => {
    if (showSideBar || showSequencesModal || showCheckoutModal) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [showCheckoutModal, showSequencesModal, showSideBar]);
  return (
    <div className="App" dir="rtl">
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}
      {showCheckoutModal && <Checkout />}
      <MainPage />
    </div>
  );
}

export default App;
