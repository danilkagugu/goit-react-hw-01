import "./App.css";

import friends from "../../friends.json";
import transactions from "../../transactions.json";
import userData from "../../userData.json";

import ProfileCard from "../Profile/ProfileCard";
import FriendsCard from "../Friends/FriendsCard";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <ProfileCard userData={userData} />

      <FriendsCard friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
