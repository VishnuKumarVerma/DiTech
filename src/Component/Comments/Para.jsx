import styles from "./Para.module.css";
import PropTypes from "prop-types";

function Para(props) {
  return (
    <div className={styles.paraClass}>
      <p>{props.commentPara}</p>
    </div>
  );
}

Para.propTypes = {
  commentPara: PropTypes.string.isRequired,
};

export default Para;
