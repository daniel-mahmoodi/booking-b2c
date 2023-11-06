import React, { Fragment, useEffect } from "react";
import RightSideBar from "./RightSideBar/RightSideBar";
import DashboardTab from "./DashboardTab";
import EditProfileTab from "./EditProfileTab";
import BasketTab from "./BasketTab";
import FactorTab from "./FactorTab";
import { useDispatch, useSelector } from "react-redux";
import ListOfOrders from "../Order/ListOfOrders";
import OrderDetails from "../Order/OrderDetails";
import { profileActions } from "../../store/profile-slice";
const Profile = () => {
  const activeTab = useSelector((state) => state.profile.activeTab);
 
  return (
    <main className="page-main" style={{ margin: "20px 0" }}>
      <div
        className="uk-container d-flex justify-between align-start"
        style={{ direction: "rtl" }}
      >
        <RightSideBar />
        {activeTab === "basket" && <BasketTab />}
        {activeTab === "order" && <ListOfOrders />}
        {activeTab === "orderDetails" && <OrderDetails />}
        {/* {activeTab === "dasboard" && <DashboardTab />} */}
        {/* {activeTab && <EditProfileTab />} */}
        {/* {activeTab && <BasketTab />} */}
        {/* {activeTab && <FactorTab />} */}
      </div>
    </main>
  );
};

export default Profile;
