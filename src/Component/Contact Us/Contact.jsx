import styles from "./Contact.module.css";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

function Contact() {
  return (
    <div className={styles.mainContactClass}>
      <div>
        <LeftContact />
      </div>
      <div>
        <RightContact />
      </div>
    </div>
  );
}

export default Contact;
