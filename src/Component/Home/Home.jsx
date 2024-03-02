// import React from 'react';
import styles from "./Home.module.css";
import backgroundImage from "../../assets/home-back.jpg"; // Path to your background image
import foregroundImage from "../../assets/overlayBack-Two.png"; // Path to your foreground image
import HomeButton from "./HomeButton";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.overlay}></div>
      <div
        className={styles.foregroundImage}
        style={{ backgroundImage: `url(${foregroundImage})` }}
      ></div>
      <div className={styles.text}>
        <h1>
          Creating a Better <br />
          <span>IT Solutions.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          faucibus ligula. Maecenas a purus massa. Ut elementum sem mauris, ut
          venenatis tortor congue et. Ut et dolor massa.
        </p>
      </div>
      {/* Add other components as needed */}
      <div className={styles.btnClass}>
        <HomeButton />
      </div>
    </div>
  );
}

export default Home;
