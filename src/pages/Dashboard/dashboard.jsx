import React, { useState } from "react";
import AccountBoard from "../../Components/AccountBoard/accountBoard";
import BasePageLayout from "../../Components/BasePageLayout/basePageLayout";
import Branch from "../../Icons/radar.svg";
import Plus from "../../Icons/plus-icon.svg";
import "./dashboard.css";
import VirtualAccountBoard from "../../Components/VirtualAccountBoard/virtualAccountBoard";
import TableView from "../../Components/TableViewScreen/tableView";
import Datas from "./data";

const Dashboard = () => {
  const [index, setIndex] = useState(0);
  const [displayMore, setDisplayMore] = useState(false);

  const handleClick = () => {
    setIndex(index + 1);
  };
  const handleDisplay = () => {
    setDisplayMore(!displayMore);
  };

  let dataList = Datas[index];

  return (
    <BasePageLayout>
      <div className="dashboard__virtual">
        <h3>Virtual Account Dashboard</h3>
        <div className="dashboard__virtual_btn">
          <button className="new-branch">
            <img alt="branch-icon" src={Branch} />
            Create New Branch
          </button>
          <button className="virtual-acc">
            <img alt="plus-icon" src={Plus} />
            Create Virtual Accont
          </button>
        </div>
      </div>
      <div className="dashboard__wrapper">
        <div>
          <AccountBoard />
          <VirtualAccountBoard
            handleChangeData={handleClick}
            accountDetails={Datas}
            handleDisplayChange={handleDisplay}
          />
        </div>
        <TableView
          handleChangeData={handleClick}
          handleDisplayChange={handleDisplay}
          displayData={Datas}
        />
      </div>
    </BasePageLayout>
  );
};

export default Dashboard;
