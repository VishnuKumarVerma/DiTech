import styles from "./Cards.module.css";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className={styles.mainCardClass}>
      <CardItems />
    </div>
  );
}

export default Cards;
