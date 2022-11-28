import React from 'react'
import "./accountBoard.css";

const AccountBoard = () => {
  return (
    <div className="accountBoard">
      <div className="accountBoard__total">
        <h6>Total Credits</h6>
        <h2>NGN 3,287,902.00</h2>
      </div>
      <div className="accountBoard__transfer">
        <h6>Total Transfer Settlememts</h6>
        <h2>81 Settlement</h2>
      </div>
      <div className="accountBoard__account">
        <h6>Generated Accounts</h6>
        <h2>12 Accounts</h2>
      </div>
    </div>
  )
}

export default AccountBoard;