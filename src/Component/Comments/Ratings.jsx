import styles from "./Ratings.module.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Ratings() {
  return (
    <div className={styles.ratingsClass}>
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
    </div>
  );
}

export default Ratings;
