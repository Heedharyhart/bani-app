import React from "react";
import PurpleWallet from "../../Icons/purple-wallet.svg";
import LinearIcon from "../../Icons/linear-icon.svg";
import SearchIcon from "../../Icons/search-icon.svg";
import PurpleSetting from "../../Icons/purple-setting.svg";
import "./virtualAccountBoard.css";
const VirtualAccountBoard = ({
  accountDetails,
  handleChangeData,
}) => {


  return (
    <div className="virtualAccount">
      <div className="virtualAccount__wrapper">
        <div className="virtualAccount__content">
          <h5>Your Virtual Accounts</h5>
          <div>
            <img
              className="purple-wallet"
              alt="purple-wallet"
              src={PurpleWallet}
            />
            <img className="linear-wallet" alt="linear-icon" src={LinearIcon} />
          </div>
        </div>
        <div className="divider"></div>
        <div className="virtualAccount__branch">
          <span>Branch</span>
          <div>
            <input placeholder="Search for virtual account" />
            <button>
              <img alt="search-icon" src={SearchIcon} />
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="virtualAccount__manage">
          <h5>Lekki II</h5>
          <div>
            <span>Manage</span>
            <img alt="purple-setting" src={PurpleSetting} />
          </div>
        </div>
        <table className="virtualAccount__table">
          <thead className="virtualAccount__thead">
            <tr className="virtualAccount__trule">
              <th></th>
              <th>Bank Name</th>
              <th>Account number</th>
              <th></th>
              <th>Total inflow</th>
            </tr>
          </thead>
          <tbody className="virtualAccount__tbody">
            {accountDetails.map((data, index) => {
              const first = index === 0;
              const second = index === 3;
              return (
                <tr key={index} onClick={() => handleChangeData(index)}>
                  <td>
                    <img
                      alt="logo"
                      src={data.logo}
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.account_number}</td>
                  <td>
                    <span className="copy">
                      {" "}
                      <img alt="copy-icon" src={data.copy_icon} />{" "}
                      <span
                        className={
                          first ? "format" : second ? "format3" : "format2"
                        }
                      >
                        <img alt="format-icon" src={data.format_icon} />
                        {data.location}
                      </span>{" "}
                    </span>
                  </td>
                  <td>
                    {data.inflow} <img alt="more-icon" src={data.more_icon} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VirtualAccountBoard;
