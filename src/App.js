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
import Counseling from "./components/Catalog/Counseling/Counseling";
function App() {
  const showSideBar = useSelector((state) => state.ui.showSideBar);
  const showSequencesModal = useSelector(
    (state) => state.ui.showSequencesModal
  );
  const showSpinnerModal = useSelector((state) => state.ui.showSpinnerModal);
  const showCheckoutModal = useSelector((state) => state.ui.showCheckoutModal);
  const showCounselingModal = useSelector(
    (state) => state.ui.showCounselingModal
  );
  const urlToPay = useSelector((state) => state.order.url);
 
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
      showSpinnerModal ||
      showCounselingModal
    ) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [
    showCheckoutModal,
    showCounselingModal,
    showSequencesModal,
    showSideBar,
    showSpinnerModal,
  ]);
  return (
    <div className="App" dir="rtl">
      {showSpinnerModal && <Spinner />}
      {/* <BasicDocument /> */}
      {/* <ReactPrintHtml /> */}
      {/* <ReactToPdf /> */}
      {/* <Printer /> */}
      {showCounselingModal && <Counseling />}
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}
      {showCheckoutModal && <Checkout />}
      <MainPage />
    </div>
  );
}

export default App;
