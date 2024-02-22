const FriendsTemplate = ({ avatar, name, isOnline = false }) => {
  return (
    <>
      <li>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </li>
    </>
  );
};

export default FriendsTemplate;
