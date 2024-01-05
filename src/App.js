import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import Sequences from "./components/Sequence/Sequence";
import OffcanvasMenu from "./components/Navbar/OffcanvasMenu";
import Checkout from "./components/Order/Checkout";
import Spinner from "./components/Spinner/Spinner";

import Counseling from "./components/Catalog/Counseling/Counseling";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

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
  // prevent footer component shows in login and signin pages
  const location = useLocation();
  const excludeFooterRoutes = ["/login", "/signup", "/print-page"];
  const shouldShowFooter = !excludeFooterRoutes.includes(location.pathname);
  const excludeNavbarRoutes = ["/print-page"];
  const shouldShowNavbar = !excludeNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavbar && <Navbar />}
      {showSpinnerModal && <Spinner />}
      {/* <BasicDocument /> */}
      {/* <ReactPrintHtml /> */}
      {/* <ReactToPdf /> */}
      {/* <Printer /> */}
      {showCounselingModal && <Counseling />}
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}
      {showCheckoutModal && <Checkout />}
      <div className="App-body">
        <MainPage />
      </div>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default App;
