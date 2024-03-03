import styles from "./LeftService.module.css";
import PropTypes from "prop-types";

function LeftService(props) {
  return (
    <div className={styles.leftClass}>
      <div className={styles.leftUpLogos}>
        {props.logoItemsUp.map((logo, index) => (
          <img key={index} src={logo} alt="Our tieUp's companies logo"/>
        ))}
      </div>
      <div className={styles.leftDownLogos}>
        {props.logoItemsDown.map((logo, index) => (
          <img key={index} src={logo} alt="Our tieUp's companies logo"/>
        ))}
      </div>
    </div>
  );
}

LeftService.propTypes = {
  logoItemsUp: PropTypes.array.isRequired,
  logoItemsDown: PropTypes.array.isRequired,
};

export default LeftService;
