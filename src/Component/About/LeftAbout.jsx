import PropTypes from "prop-types";
import styles from "./LeftAbout.module.css";
import LeftProgress from "./LeftProgress";
import LeftText from "./LeftText";

function LeftAbout(props) {
  return (
    <div className={styles.leftClass} style={props.styles}>
      <LeftText />
      <LeftProgress />
    </div>
  );
}

LeftAbout.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default LeftAbout;
