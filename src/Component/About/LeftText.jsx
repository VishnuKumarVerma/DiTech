import styles from "./LeftText.module.css";

function LeftText() {
  return (
    <div className={styles.leftAboutTextClass}>
      <h3>Welcome to Ditech</h3>
      <h1>
        Let Us Be Your <br />
        <span>IT Partner</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
        faucibus ligula. Maecenas a purus massa. Ut elementum sem.
      </p>
    </div>
  );
}

export default LeftText;
