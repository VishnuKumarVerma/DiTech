import CaseImages from './CaseImages';
import styles from './CaseItems.module.css';
import CaseText from './CaseText';

function CaseItems() {
  return <div className={styles.mainCaseItemsClass}>
    <CaseText />
    <CaseImages />
  </div>
}

export default CaseItems;