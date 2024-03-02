import styles from "./Price.module.css";
import PriceItems from "./PriceItems";

function Price() {
  return (
    <div className={styles.mainPriceClass}>
      <PriceItems />
    </div>
  );
}

export default Price;
