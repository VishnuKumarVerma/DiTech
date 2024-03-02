import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./LeftProgress.module.css";

function LeftProgress() {
  const first = 69;
  const second = 58;
  const third = 75;

  return (
    <div className={styles.leftProgressClass}>
      <div className={styles.firstProgress}>
        <label htmlFor="">Wokflow Management</label>
        <ProgressBar variant="info" now={first} label={`${first}%`} />
      </div>
      <div className={styles.firstProgress}>
        <label htmlFor="">IT Practice in Cloud</label>
        <ProgressBar variant="info" now={second} label={`${second}%`} />
      </div>
      <div className={styles.firstProgress}>
        <label htmlFor="">Software For Financial</label>
        <ProgressBar variant="info" now={third} label={`${third}%`} />
      </div>
    </div>
  );
}

export default LeftProgress;
