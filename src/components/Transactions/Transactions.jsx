import React from "react";
import TransactionsForm from "./TransactionsForm";
import YourTransactions from "./YourTransactions";

const Transactions = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
              <span>৳</span>
              <span>10500</span>
            </h3>
          </div>

          <TransactionsForm />

          <p className="second_heading">Your Transactions:</p>

          <YourTransactions />
        </div>
      </div>
    </>
  );
};

export default Transactions;
