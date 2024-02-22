import "./App.css";

import friends from "../../friends.json";
import transactions from "../../transactions.json";
import userData from "../../userData.json";

import FriendsCard from "../Friends/Friends";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsCard friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
