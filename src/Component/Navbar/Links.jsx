import styles from "./Links.module.css";

function Links() {
  return (
    <>
      <ul className={styles.linksClass}>
        <li>Home</li>
        <li>Services</li>
        <li className={styles.dropdown}>
          <section>
            Case Studies <span>+</span>
          </section>
          <div className={styles.dropDiv}>
            <a href="">Case Studies</a>
            <a href="">Case Details</a>
          </div>
        </li>
        <li className={styles.dropdown}>
          <section>
            Page <span>+</span>
          </section>
          <div className={styles.dropDiv}>
            <a href="">About Us</a>
            <a href="">Our Team</a>
            <a href="">Pricing </a>
            <a href="">FAQ </a>
            <a href="">404 </a>
          </div>
        </li>
        <li className={styles.dropdown}>
          <section>
            Blog <span>+</span>
          </section>
          <div className={styles.dropDiv}>
            <a href="">Blog Archieve</a>
            <a href="">Single Post</a>
          </div>
        </li>
        <li>Contact</li>
      </ul>
    </>
  );
}

export default Links;
