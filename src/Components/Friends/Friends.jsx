import css from "./Friends.module.css";

const FriendsCard = ({ friends }) => {
  return (
    <>
      <h2 className={css.exercises}>Завдання 2 - Список друзів</h2>
      <a className={css.imgGoIt} href="https://goit.global/ua/" target="_blank">
        <img
          src="https://www.edu.goit.global/_next/image?url=%2Fimages%2Fprogress%2Fcat%2Fcat_day_4.svg&w=1920&q=75"
          alt=""
        />
      </a>
      <div className={css.friendsBox}>
        <ul className={css.cardList}>
          {friends.map((item) => (
            <li className={css.cardItem} key={item.id}>
              <img
                className={css.cardImg}
                src={item.avatar}
                alt={name}
                width="48"
              />
              <p className={css.cardName}>{item.name}</p>
              <p
                className={`${css.cardStatus} ${
                  item.isOnline ? css.cardStatusOnline : ""
                }`}
              >
                {item.isOnline ? "Online" : "Offline"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FriendsCard;
