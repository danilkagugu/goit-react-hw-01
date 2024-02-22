import css from "./TransationHistory.module.css";
const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <h2 className={css.exercises}>Завдання 3 - Історія транзакцій</h2>
      <a className={css.imgGoIt} href="https://goit.global/ua/" target="_blank">
        <img
          src="https://www.edu.goit.global/_next/image?url=%2Fimages%2Fprogress%2Fcat%2Fcat_day_4.svg&w=1920&q=75"
          alt=""
        />
      </a>
      <div className={css.tableBox}>
        <table className={css.tableTop}>
          <thead className={css.tableTheard}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody className={css.tableTbody}>
            {transactions.map((item) => (
              <tr className={css.tableLine} key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
