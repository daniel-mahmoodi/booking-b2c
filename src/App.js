import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import Sequences from "./components/Sequence/Sequence";
import OffcanvasMenu from "./components/Navbar/OffcanvasMenu";
import Checkout from "./components/Order/Checkout";
import Spinner from "./components/Spinner/Spinner";
import BasicDocument from "./BasicDocument";
import PrintTicketsList from "./components/PrintTicket/PrintTicketsList";
import Printer from "./components/Utilities/Printer";
import ReactPrintHtml from "./components/Utilities/ReactPrintHtml";
import ReactToPdf from "./components/Utilities/ReactToPdf";
function App() {
  const showSideBar = useSelector((state) => state.ui.showSideBar);
  const showSequencesModal = useSelector(
    (state) => state.ui.showSequencesModal
  );
  const showSpinnerModal = useSelector((state) => state.ui.showSpinnerModal);
  const showCheckoutModal = useSelector((state) => state.ui.showCheckoutModal);
  const urlToPay = useSelector((state) => state.order.url);

  const discountPercentages = useSelector(
    (state) => state.order.discountPercentages
  );
  const selectedIndex = useSelector((state) => state.order.selectedIndex);
  const orderId = useSelector((state) => state.order.orderId);

  useEffect(() => {
    if (urlToPay) {
      setTimeout(() => {
        window.location.href = urlToPay;
      }, 1000);
    }
  }, [urlToPay]);

  useEffect(() => {
    if (
      showSideBar ||
      showSequencesModal ||
      showCheckoutModal ||
      showSpinnerModal
    ) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [showCheckoutModal, showSequencesModal, showSideBar, showSpinnerModal]);
  return (
    <div className="App" dir="rtl">
      {showSpinnerModal && discountPercentages && selectedIndex && orderId && (
        <Spinner
          discountPercentages={discountPercentages}
          selectedIndex={selectedIndex}
          orderId={orderId}
        />
      )}
      {/* <BasicDocument /> */}
      {/* <ReactPrintHtml /> */}
      {/* <ReactToPdf /> */}
      {/* <Printer /> */}
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}
      {showCheckoutModal && <Checkout />}
      <MainPage />
    </div>
  );
}

export default App;
