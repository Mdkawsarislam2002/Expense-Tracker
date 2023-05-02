/* eslint-disable react/prop-types */
const BalanceSum = ({ data }) => {
  let sum = 0;
  data?.map((items) => {
    if (items.type === "expense") {
      sum -= Number(items.amount);
    }
    if (items.type === "income") {
      sum += Number(items.amount);
    }
  });

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span> ৳ </span>
        <span>{sum}</span>
      </h3>
    </div>
  );
};

export default BalanceSum;
