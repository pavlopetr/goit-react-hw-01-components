import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../objects/user.json";
import data from "../objects/data.json";
import friends from "../objects/friends.json";
import transactions from "../objects/transactions.json";

export const App = () => {
  return (
    <div>
     <Profile 
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />
     <Statistics title="Upload stats" stats={data} />
     <Statistics stats={data} />

     <FriendList friends={friends} />

     <TransactionHistory items={transactions} />


    </div>
  );
};
