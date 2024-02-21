import "./App.css";

import friends from "../../friends.json";
import transactions from "../../transactions.json";
import userData from "../../userData.json";

import Profile from "../Profile/Profile";
import Friends from "../Friends/Friends";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <ul>
        {friends.map((item) => (
          <Friends
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
      <div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {transactions.map((item) => (
                <TransactionHistory
                  key={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
