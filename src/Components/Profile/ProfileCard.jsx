import ProfileTemplate from "./ProfileTemplate";

const ProfileCard = ({ userData }) => {
  return (
    <ProfileTemplate
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
};

export default ProfileCard;
