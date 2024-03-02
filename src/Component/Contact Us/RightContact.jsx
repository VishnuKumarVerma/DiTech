import styles from "./RightContact.module.css";

function RightContact() {
  return (
    <div className={styles.RightContactClass}>
      <form action="" method="get">
        <div className={styles.firstRow}>
          <input
            type="text"
            name=""
            className={styles.firstInput}
            placeholder="Your Name"
          />
          <input type="email" name="" id="" placeholder="Your Email" />
        </div>
        <div className={styles.secondRow}>
          <select name="" id="" className={styles.thirdInput}>
            <option value="IT Management">Inquiry...</option>
            <option value="IT Management">IT Management</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="SoftWare Developer">SoftWare Developer</option>
          </select>
          <input type="number" name="" id="" placeholder="Your Phone..." />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Additional Details"
        ></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RightContact;
