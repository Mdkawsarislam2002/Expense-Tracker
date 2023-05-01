/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../Redux/Features/transactions/transactionsApi";

import Delete from "../Icons/Delete";
import Edits from "../Icons/Edits";

const YourTransactions = ({ transaction }) => {
  const { id, name, amount, type } = transaction;

  const dispatch = useDispatch();

  return (
    <div className="conatiner_of_list_of_transactions">
      <ul>
        <li className="transaction income">
          <p>{name}</p>
          <div className="right">
            <p>৳ {amount}</p>
            <button
              className="link"
              onClick={() => {
                dispatch(deleteTransaction({ id }));
              }}
            >
              <Delete />
            </button>
            <button className="link">
              <Edits />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default YourTransactions;
