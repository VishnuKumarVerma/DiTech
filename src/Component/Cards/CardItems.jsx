import styles from "./CardItems.module.css";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import icon4 from "../../assets/Icon4.png";
import CardElements from "./CardElement";

function CardItems() {
  const cardData = [
    {
      icon: icon1,
      heading: "Data Center",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      icon: icon2,
      heading: "Cloud Services",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      icon: icon3,
      heading: "IT Management",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
    {
      icon: icon4,
      heading: "Cyber Security",
      para: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    },
  ];

  return (
    <div className={styles.carditemsClass}>
      {cardData.map((items, index) => (
        <CardElements
          key={index}
          cardIcon={items.icon}
          cardHead={items.heading}
          cardPara={items.para}
        />
      ))}
    </div>
  );
}

export default CardItems;
