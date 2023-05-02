/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../Redux/Features/transactions/transactionsApi";
import {
  setEditState,
  manageEditing,
} from "../../Redux/Features/FormHandaling/FormHandling";

import { motion } from "framer-motion";

import Delete from "../Icons/Delete";
import Edits from "../Icons/Edits";

const YourTransactions = ({ transaction, index }) => {
  const { id, name, amount, type } = transaction;

  //  redux state  value and  state management
  const dispatch = useDispatch();

  const EditHandler = () => {
    dispatch(manageEditing());
    dispatch(setEditState(transaction));
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateX: index % 2 === 0 ? 100 : -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1 * (index / 2) }}
      className="conatiner_of_list_of_transactions "
    >
      <ul>
        <li
          className={`transaction ${type === "income" ? "income" : "expense"}`}
        >
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
            <button className="link" onClick={EditHandler}>
              <Edits />
            </button>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default YourTransactions;
