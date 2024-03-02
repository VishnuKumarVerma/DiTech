import styles from "./CaseImages.module.css";
// import { useState } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
// import { FaPlus } from "react-icons/fa";

function CaseImages() {
  // const [isHovered, setIsHovered] = useState(false);

  const caseImages = [img1, img2, img3];

  return (
    <div className={styles.mainCaseImagesClass}>
      <div className={styles.imageContainer}>
        {caseImages.map((items, index) => (
          <div key={index} className={styles.imageContent}>
            <div className={styles.caseImages}>
              <img src={items} alt="" />
            </div>
            {/* <FaPlus />
            <h2>IT Management</h2>
            <buton:but>Read More</buton:but> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseImages;
