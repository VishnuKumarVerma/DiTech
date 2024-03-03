import PriceElements from "./PriceElements";
import styles from "./PriceItems.module.css";

function PriceItems() {
  const planData = [
    {
      head: "Basic",
      price: "$39",
      para: "Reliable",
    },
    {
      head: "Premium",
      price: "$99",
      para: "Easy to Use",
    },
    {
      head: "Pro",
      price: "$69",
      para: "Automatic",
    },
  ];

  return (
    <div className={styles.mainPriceItemsClass}>
      <div className={styles.priceHeader}>
        <h3>Pricing Plan</h3>
        <h1>
          Choose Your <span>Plan</span>
        </h1>
      </div>
      <div className={styles.cards} data-aos="">
        {planData.map((items, index) => (
          <PriceElements
            key={index}
            cardHead={items.head}
            cardPrice={items.price}
            cardPara={items.para}
          />
        ))}
      </div>
    </div>
  );
}

export default PriceItems;
