import { useEffect } from "react";

//  redux
import { fetchTransactions } from "../../Redux/Features/transactions/transactionsApi";
import { useDispatch, useSelector } from "react-redux";

//  components
import TransactionsForm from "./TransactionsForm";
import YourTransactions from "./YourTransactions";

const Transactions = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errorMsg, dltMsg } = useSelector(
    (state) => state.transactionsData
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, dltMsg]);

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
          {data?.length == 0 && <p>No transaction to show </p>}

          {data?.length > 0 &&
            !isLoading &&
            !isError &&
            data?.map((allTransaction) => (
              <YourTransactions
                key={allTransaction.id}
                transaction={allTransaction}
              />
            ))}
          {isLoading && <p>Loading...</p>}
          {isError && <p>{errorMsg}</p>}
        </div>
      </div>
    </>
  );
};

export default Transactions;
