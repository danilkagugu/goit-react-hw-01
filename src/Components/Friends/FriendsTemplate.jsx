import css from "./FriendsCard.module.css";

const FriendsTemplate = ({ avatar, name, isOnline = false }) => {
  return (
    <>
      <img className={css.cardImg} src={avatar} alt={name} width="48" />
      <p className={css.cardName}>{name}</p>
      <p
        className={`${css.cardStatus} ${isOnline ? css.cardStatusOnline : ""}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendsTemplate;
