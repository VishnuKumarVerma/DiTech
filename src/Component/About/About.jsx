import styles from "./About.module.css";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

function About() {
  const leftCompo = {
    color: "white",
    flex: "50%",
  };

  const rightCompo = {
    flex: "50%",
    paddingTop: "0px",
    paddingRight: "30px",
    color: "#fff",
  };

  return (
    <div className={styles.aboutClass}>
      <LeftAbout styles={leftCompo} />
      <RightAbout styles={rightCompo} />
    </div>
  );
}

export default About;
