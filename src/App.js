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
  const originalArray = [
    {
      "id":1123,
      "eventId":3,
      "eventTitle":"تفریحات دریایی سیشیل",
      "ticketId":1231,
      "ticketTitle":"شاتل",
      "sansTitle":"Title",
      "sansId":"723",
      "executeDate":"1/2/2024 12:11:01 AM",
      "price":239800.000000,
      "discountedPrice":239800.000000,
      "imageUrl":"wwwroot\\gallery\\ab9bc513-1909-4114-9e9e-a677109b5a0f20230923.jpg",
      "commission":0,
      "count":5,
      "capacity":10
    },
    // Add more objects as needed
  ];
  
  const transformedArray = originalArray.map(item => ({
    eventId: item.eventId,
    eventTitle: item.eventTitle,
    tickets: {
      commission: item.commission,
      count: item.count,
      capacity: item.capacity,
      ticketId: item.ticketId,
      ticketTitle: item.ticketTitle,
      sansTitle: item.sansTitle,
      sansId: item.sansId,
      executeDate: item.executeDate,
      price: item.price,
      discountedPrice: item.discountedPrice,
      imageUrl: item.imageUrl,
    },
  }));
  
  console.log(transformedArray);
  
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
