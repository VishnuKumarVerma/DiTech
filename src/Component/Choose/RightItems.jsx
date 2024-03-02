import styles from "./RightItems.module.css";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

function RightItems(props) {
  return (
    <div className={styles.rightItemsClass}>
      <img src={props.chooseDataIcon} alt="" />
      <p>{props.chooseDataHead}</p>
      <h2>{props.chooseDataText}</h2>
      <div className={styles.chooseNextIcon}>
        <FaChevronRight />
      </div>{" "}
    </div>
  );
}

RightItems.propTypes = {
  chooseDataIcon: PropTypes.string.isRequired,
  chooseDataHead: PropTypes.string.isRequired,
  chooseDataText: PropTypes.string.isRequired,
};

export default RightItems;
