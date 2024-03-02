import styles from "./LeftContact.module.css";
import { FaCheckDouble } from "react-icons/fa";

function LeftContact() {
  return (
    <div className={styles.LeftContactClass}>
      <div className={styles.leftHead}>
        <h1>
          We Are <span>Perfect Solutions</span> For <span>Your Business</span>
        </h1>
        <p>
          Donec vitae lacus vel ligula hendrerit viverra non non orci. Quisque
          sed tincidunt sapien. Maecenas gravida at velit feugiat vulputate.
        </p>
      </div>
      <h4>
        <FaCheckDouble />
        <p>We are committed to providing quality IT Services</p>
      </h4>
      <h4>
        <FaCheckDouble />
        <p>Really know the true needs and expectations of customers</p>
      </h4>
      <h4>
        <FaCheckDouble />
        <p>Provided by experts to help challenge critical activities</p>
      </h4>
      <h4>
        <FaCheckDouble />
        <p>Processes of achieving the excellence improvements</p>
      </h4>
    </div>
  );
}

export default LeftContact;
