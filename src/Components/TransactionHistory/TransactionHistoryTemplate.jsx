// import css from "./TransationHistory.module.css";

const TransactionHistoryTemplate = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default TransactionHistoryTemplate;
