import styles from "./Choose.module.css";
import LeftChoose from "./LeftChoose";
import RightChoose from "./RightChoose";

function Choose() {
  return (
    <div className={styles.mainChooseSection}>
      <div className={styles.mainLeftClass}>
        <LeftChoose />
      </div>
      <div className={styles.mainRightClass}>
        <RightChoose />
      </div>
    </div>
  );
}

export default Choose;
