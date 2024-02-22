import FriendsTemplate from "./FriendsTemplate";

const FriendsCard = ({ friends }) => {
  return (
    <li>
      {friends.map((item) => (
        <FriendsTemplate
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </li>
  );
};

export default FriendsCard;
