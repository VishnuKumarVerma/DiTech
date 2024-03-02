import styles from './Services.module.css'
import ServiceItems from "./ServiceItems";

function Services() {
  return (
    <div className={styles.mainServiceClass}>
      <ServiceItems />
    </div>
  );
}

export default Services;
