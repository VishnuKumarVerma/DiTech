import styles from "./PriceElements.module.css";
import PropTypes from "prop-types";

function PriceElements(props) {
  return (
    <div className={styles.mainPriceElementsClass}>
      <h3>{props.cardHead}</h3>
      <h1>{props.cardPrice}</h1>
      <sub>Per Month</sub>
      <ul>
        <li>
          <p>✅{props.cardPara}</p>
        </li>
        <li>
          <p>✅{props.cardPara}</p>
        </li>
        <li>
          <p>✅{props.cardPara}</p>
        </li>
        <li>
          <p>✅{props.cardPara}</p>
        </li>
      </ul>
      <button type="button">Choose Plan</button>
    </div>
  );
}

PriceElements.propTypes = {
  cardHead: PropTypes.string.isRequired, // Assuming PropsItems is a string
  cardPrice: PropTypes.string.isRequired, // Assuming PropsItems is a string
  cardPara: PropTypes.string.isRequired, // Assuming PropsItems is a string
};

export default PriceElements;
