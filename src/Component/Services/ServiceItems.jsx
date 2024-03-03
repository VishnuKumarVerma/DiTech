import styles from "./ServiceItems.module.css";
import logo1 from "../../assets/logo-1.png";
import logo2 from "../../assets/logo-2.png";
import logo3 from "../../assets/logo-3.png";
import logo4 from "../../assets/logo-4.png";
import logo5 from "../../assets/logo-5.png";
import logo6 from "../../assets/logo-6.png";
import LeftService from "./LeftService";
import RightService from "./RightService";

function ServiceItems() {
  const serviceLeftLogos = [
    [logo1, logo2, logo3, logo1, logo3, logo5],
    [logo4, logo5, logo6, logo2, logo4, logo6], 
  ];

  return (
    <div className={styles.serviceItemClass}>
      <div className={styles.leftItemsClass}>
        {serviceLeftLogos.map((items, index) => (
          <LeftService
            key={index}
            logoItemsUp={items.slice(0, 6)} 
            logoItemsDown={items.slice(6)} 
          />
        ))}
      </div>
      <div className={styles.rightItemsClass}>
        <RightService />
      </div>
    </div>
  );
}

export default ServiceItems;
