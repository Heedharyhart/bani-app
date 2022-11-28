import React from "react";
import "./sideBar.css";
import Radar from "../../Icons/radar.svg";
import Compliance from "../../Icons/compliance-icon.svg";
import Overview from "../../Icons/overview-icon.svg";
import Product from "../../Icons/product-icon.svg";
import Customer from "../../Icons/customers-icon.svg";
import Orders from "../../Icons/orders.svg";
import Wallet from "../../Icons/wallets-icon.svg";
import Transaction from "../../Icons/transaction-icon.svg";
import VirtualAccount from "../../Icons/virtual-icon.svg";
import Toggle from "../../Icons/toggle-icon.svg";
import Setting from "../../Icons/setting-icon.svg";
import Audit from "../../Icons/audit-icon.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar__wrapper">
        <div className="sideBar__wrapper-welcome">
          <div>
            <img alt="radar-icon" src={Radar} />
            <h6>Welcome</h6>
          </div>
          <div>
            <img alt="compliance-icon" src={Compliance} />
            <h6>Compliance </h6>
          </div>
          <div>
            <img alt="overview-icon" src={Overview} />
            <h6>Overview </h6>
          </div>
        </div>
        <div className="sideBar__wrapper-business">
          <h5>BUSINESS</h5>
          <div>
            <img alt="product-icon" src={Product} />
            <h6>Product </h6>
          </div>
          <div>
            <img alt="customer-icon" src={Customer} />
            <h6>Customers </h6>
          </div>
          <div>
            <img alt="orders-icon" src={Orders} />
            <h6>Orders </h6>
          </div>
        </div>
        <div className="sideBar__wrapper-payment">
          <h5>PAYMENTS</h5>
          <div>
            <img alt="wallet-icon" src={Wallet} />
            <h6>Wallets</h6>
          </div>
          <div>
            <img alt="transaction-icon" src={Transaction} />
            <h6>Transactions</h6>
          </div>
          <div>
            <img alt="virtualAcc-icon" src={VirtualAccount} />
            <span>
              <h6>Virtual Account</h6>
              <span className="virtual__wrap">New</span>
            </span>
          </div>
        </div>
        <div className="sideBar__wrapper-footer">
          <div>
            <img alt="toggle-icon" src={Toggle} />
            <h6>Live mode</h6>
          </div>
          <div>
            <img alt="setting-icon" src={Setting} />
            <h6>Settings</h6>
          </div>
          <div>
            <img alt="audit-icon" src={Audit} />
            <h6>Audit logs</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
