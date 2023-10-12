import { useSelector } from "react-redux";
import "./App.css";
import MainPage from "./components/Main/MainPage";
import PricingNotificationBar from "./components/Order/PricingNotificationBar";
import PurchaseModal from "./components/Order/PurchaseModal";
import ShoppingCartModal from "./components/Order/ShoppingCartModal";
import Sequences from "./components/Sequences/Sequences";
import Login from "./components/Auth/LoginByPass";
import OffcanvasMenu from './components/Navbar/OffcanvasMenu'
function App() {
  const showSideBar = useSelector(
    (state) => state.ui.showSideBar
  );
  const showSequencesModal = useSelector(
    (state) => state.ui.showSequencesModal
  );
  return (
    <div className="App" dir="rtl">
      {/* <PurchaseModal /> */}
      {/* <ShoppingCartModal/> */}
      {showSideBar && <OffcanvasMenu />}
      {showSequencesModal && <Sequences />}

      <MainPage />
    </div>
  );
}

export default App;
