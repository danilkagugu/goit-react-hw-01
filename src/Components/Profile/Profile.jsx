const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" width="300" />
      <h2>{username}</h2>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
        <li>{followers}</li>
        <li>{views}</li>
        <li>{likes}</li>
      </ul>
    </div>
  );
};
export default Profile;
