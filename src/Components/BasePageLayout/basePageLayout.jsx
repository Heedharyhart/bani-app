import React from "react";
import NavBar from "../NavBar/navBar";
import SideBar from "../SideBar/sideBar";
import "./basePageLayout.css";

const BasePageLayout = ({ children }) => {
  return (
    <div className="basePageLayout">
      <div className="basePageLayout__wrapper">
        <div className="basePageLayout__mainContent">
          <div className="basePageLayout__Navigation">
            <NavBar />
          </div>
          
        </div>
      </div>
      <div className="basePageLayout__layout">
        <SideBar />
        <div className="basePageLayout__children">{children}</div> 
      </div>
    </div>
  );
};

export default BasePageLayout;
