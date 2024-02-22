import css from "./ProfileCard.module.css";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <h2 className={css.exercises}>Завдання 1 - Профіль соціальної мережі</h2>
      <a className={css.imgGoIt} href="https://goit.global/ua/" target="_blank">
        <img
          src="https://www.edu.goit.global/_next/image?url=%2Fimages%2Fprogress%2Fcat%2Fcat_day_4.svg&w=1920&q=75"
          alt=""
        />
      </a>
      <div className={css.profileBox}>
        <div className={css.topProfileBox}>
          <img
            className={css.profileImg}
            src={avatar}
            alt="User avatar"
            width="300"
          />

          <h2 className={css.profileTitle}>{name}</h2>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>
        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span className={css.profileStatsName}>Followers</span>
            <span className={css.profileStatsValue}>{followers}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileStatsName}>Views</span>
            <span className={css.profileStatsValue}>{views}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileStatsName}>Likes</span>
            <span className={css.profileStatsValue}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;
