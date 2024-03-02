import styles from "./Button.module.css";

function Button() {
  return (
    <div className={styles.btnClass}>
      <button type="button">Get Started</button>
    </div>
  );
}

export default Button;
