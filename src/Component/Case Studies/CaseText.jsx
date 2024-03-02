import styles from "./CaseText.module.css";

function CaseText() {
  return (
    <div className={styles.mainCaseTextClass}>
      <h3>Case Studies</h3>
      <h1>
        Latest <span>Showcase</span> & <span>Solutions</span> to
        <span> IT Solutions</span>
      </h1>
    </div>
  );
}

export default CaseText;
