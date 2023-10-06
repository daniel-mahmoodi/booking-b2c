import React, { Fragment } from "react";
import RightSideBar from "./RightSideBar";
import DashboardTab from "./DashboardTab";
import EditProfileTab from "./EditProfileTab";
import BasketTab from "./BasketTab";
import FactorTab from "./FactorTab";
import { useSelector } from "react-redux";
const Profile = () => {
  const activeTab = useSelector((state) => state.profile.activeTab);
  console.log("activeTab", activeTab);
  return (
    <main className="page-main" style={{ margin: "20px 0" }}>
      <div
        className="uk-container d-flex justify-between align-start"
        style={{ direction: "rtl" }}
      >
        <RightSideBar />
        <BasketTab/>
        {/* {activeTab === "dasboard" && <DashboardTab />} */}
        {/* {activeTab && <EditProfileTab />} */}
        {/* {activeTab && <BasketTab />} */}
        {/* {activeTab && <FactorTab />} */}
      </div>
    </main>
  );
};

export default Profile;
