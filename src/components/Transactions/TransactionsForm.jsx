import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditState,
  manageEditing,
} from "../../Redux/Features/FormHandaling/FormHandling";

import {
  addTransaction,
  editTransaction,
} from "../../Redux/Features/transactions/transactionsApi";

const TransactionsForm = () => {
  const dispatch = useDispatch();

  const { updatedValue, isEditing } = useSelector(
    (state) => state?.formHandling
  );

  const AllTransaction = useSelector((state) => state?.transactionsData?.data);

  const [SelectedOption, setSelectedOption] = useState("");
  const [SalaryTitle, setSalaryTitle] = useState("");
  const [Amount, setAmount] = useState("");

  const resetFormValue = () => {
    setSelectedOption("");
    setSalaryTitle("");
    setAmount("");
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const FormHandler = () => {
    if (isEditing) {
      dispatch(
        editTransaction({
          id: updatedValue.id,
          data: {
            name: SalaryTitle,
            amount: Number(Amount),
            type: SelectedOption,
            id: updatedValue.id,
          },
        })
      );
    } else {
      dispatch(
        addTransaction({
          id: AllTransaction.length + 1,
          data: {
            name: SalaryTitle,
            amount: Number(Amount),
            type: SelectedOption,
            id: updatedValue.id,
          },
        })
      );
    }

    resetFormValue();
  };

  useEffect(() => {
    if (isEditing) {
      setSalaryTitle(updatedValue.name);
      setSelectedOption(updatedValue.type);
      setAmount(updatedValue.amount);
    } else {
      resetFormValue();
    }
  }, [dispatch, isEditing, updatedValue]);

  return (
    <form onSubmit={FormHandler} className="form">
      <h3>Add new transaction</h3>

      <div className="form-group">
        <label htmlFor="transaction_name">Name</label>
        <input
          type="text"
          value={SalaryTitle}
          name="transaction_name"
          placeholder="Expense or Income Name"
          onChange={(e) => {
            setSalaryTitle(e.target.value);
          }}
        />
      </div>

      <div className="form-group radio">
        <p>Type</p>

        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="incomeType"
            id="incomeType"
            checked={SelectedOption === "income"}
            onChange={handleOptionChange}
          />
          <label htmlFor="incomeType">Income</label>
        </div>

        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="expenseType"
            id="expenseType"
            placeholder="Expense"
            checked={SelectedOption === "expense"}
            onChange={handleOptionChange}
          />
          <label htmlFor="expenseType">Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transaction_amount">Amount</label>
        <input
          type="number"
          placeholder="300"
          name="transaction_amount"
          value={Amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn">
        Add Transaction
      </button>

      {isEditing && (
        <button
          onClick={() => {
            dispatch(setEditState({}));
            dispatch(manageEditing());
            resetFormValue();
          }}
          style={{
            marginTop: "10px",
          }}
          className="btn "
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default TransactionsForm;
