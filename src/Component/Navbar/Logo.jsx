import logo from "../../assets/logo.png";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <div className={styles.logoClass}>
        <img src={logo} alt="" />
      </div>
    </>
  );
}

export default Logo;
