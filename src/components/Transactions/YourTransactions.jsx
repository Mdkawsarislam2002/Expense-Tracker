import React from "react";

const YourTransactions = () => {
  return (
    <div className="conatiner_of_list_of_transactions">
      <ul>
        <li className="transaction income">
          <p>Earned this month</p>
          <div className="right">
            <p>৳ 100</p>
            <button className="link">
              <img className="icon" src="./images/edit.svg" />
            </button>
            <button className="link">
              <img className="icon" src="./images/delete.svg" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default YourTransactions;
