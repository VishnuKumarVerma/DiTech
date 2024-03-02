import styles from "./Case.module.css";
import CaseItems from "./CaseItems";
import img from "../../assets/CaseBackground.png";

function Case() {
  return (
    <div className={styles.mainCaseClass}>
      <img
        src={img}
        alt="Background"
        className={styles.mainCaseBackgroundImage}
      />
      <div className={styles.mainCaseContent}>
        <CaseItems />
      </div>
    </div>
  );
}

export default Case;
