import PropTypes from "prop-types";
import styles from "./RightAbout.module.css";
import RightData from "./RightData";
import RightVideo from "./RightVideo";

function RightAbout(props) {
  return (
    <div className={styles.rightClass} style={props.styles}>
      <RightData />
      <RightVideo />
    </div>
  );
}

RightAbout.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default RightAbout;
