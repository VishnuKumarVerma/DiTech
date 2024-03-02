import styles from './Footer.module.css';
import FooterItems from './FooterItems';

function Footer() {
  return <div className={styles.mainFooterClass}>
    <FooterItems />
  </div>
}

export default Footer;