import PropTypes from "prop-types";
import styles from "./CardElements.module.css";
import { FaArrowRight } from "react-icons/fa";

function CardElements(props) {
  return (
    <div className={styles.cardClass}>
      <img src={props.cardIcon} alt="" />
      <h2>{props.cardHead}</h2>
      <p>{props.cardPara}</p>
      <section>
        <FaArrowRight />
      </section>
    </div>
  );
}

CardElements.propTypes = {
  cardIcon: PropTypes.string.isRequired,
  cardHead: PropTypes.string.isRequired,
  cardPara: PropTypes.string.isRequired,
};

export default CardElements;
