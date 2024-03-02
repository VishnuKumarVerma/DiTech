import styles from "./RightChoose.module.css";
import icon1 from "../../assets/Isometric-1.png";
import icon2 from "../../assets/Isometric-2.png";
import RightItems from "./RightItems";

function RightChoose() {
  const chooseData = [
    {
      icon: icon1,
      head: "Secure Database",
      feature: "Data Base",
    },
    {
      icon: icon2,
      head: "Performance Speed",
      feature: "Performance",
    },
  ];

  return (
    <div className={styles.rightChooseClass}>
      {chooseData.map((items, index) => (
        <RightItems
          key={index}
          chooseDataIcon={items.icon}
          chooseDataHead={items.head}
          chooseDataText={items.feature}
        />
      ))}
    </div>
  );
}

export default RightChoose;
