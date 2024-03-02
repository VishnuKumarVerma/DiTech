import styles from "./Navbar.module.css";

import Button from "./Button";
import Links from "./Links";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <div className={styles.navClass}>
      <Logo />
      <Links />
      <HamburgerMenu />
      <Button />
    </div>
  );
}
export default Navbar;
