import React from "react";
//import GTCO from "../../Icons/gtco.svg";
import "./tableView.css";
import Format2 from "../../Icons/format-orange.svg";
import AccountDatas from "./accountData";

const TableView = ({ displayData, handleDisplayChange, index }) => {
  const show = displayData.filter((e, i) => i === index);
  return (
    <div className="tableView">
      {show.map((data, index) => (
        <div key={index} className="tableView__wrapper">
          <div className="tableView__activity">
            <h6>
              Activity Feed <span> - GT Bank </span>
            </h6>
            <div>
              <span>Active</span>
              <ul className="activity-list">
                <li>Created 16days ago</li>
              </ul>
            </div>
          </div>
          <div className="empty-wrapper">
            <div className="empty"></div>
            <img className="empty-img" alt="gtco" src={data.logo} />
          </div>
          <div className="tableView__account">
            <div>
              <h6>{data.name}</h6>
              <span>{data.account_number}</span>
            </div>
            <button>Go to Account View</button>
          </div>
          <div className="divider"></div>
          <div className="tableView__inflow">
            <div>
              <h5>Total Inflow</h5>
              <span>{data.inflow}</span>
            </div>
            <div>
              <h5>Last Activity Date</h5>
              <span>13th Sept. 2022</span>
            </div>
            <div>
              <h5>Linked Branch</h5>
              <div className="linked">
                {" "}
                <img alt="format-icon" src={Format2} /> Dodo - Lekki II
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <table className="tableView__table">
            <thead className="tableView__thead">
              <tr className="tableView__trule">
                <th>Transaction Details</th>
                <th>Amount</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="tableView__tbody">
              {AccountDatas.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                  <td>{data.date} </td>
                  <td>
                    <img alt="chevron-icon" src={data.chevron_icon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TableView;
