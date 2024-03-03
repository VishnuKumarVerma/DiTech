import styles from "./CaseImages.module.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

function CaseImages() {

  const caseImages = [img1, img2, img3];

  return (
    <div className={styles.mainCaseImagesClass}>
      <div className={styles.imageContainer}>
        {caseImages.map((items, index) => (
          <div
            key={index}
            className={styles.imageContent}
            data-aos="flip-right"
          >
            <div className={styles.caseImages}>
              <img src={items} alt="images of the case studies" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseImages;
