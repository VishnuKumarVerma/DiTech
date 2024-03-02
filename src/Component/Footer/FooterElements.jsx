import styles from "./FooterElements.module.css";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

function FooterElements(props) {
  return (
    <div className={styles.FooterElementsClass}>
      <div className={styles.footerTop}>
        {props.footerData.map((items, index) => (
          <div key={index}>
            <div className="footerFirstSection">
              <img src={items.footerLogo} alt="" />
              <p>{items.para}</p>
            </div>
            {items.companyHead && items.companyLists && (
              <div className="footerSecondSection">
                <h1>{items.companyHead}</h1>
                <ul>
                  {items.companyLists.map((compList, compIndex) => (
                    <li key={compIndex}>{compList}</li>
                  ))}
                </ul>
              </div>
            )}
            {items.solutionHead && items.solutionLists && (
              <div className="footerThirdSection">
                <h1>{items.solutionHead}</h1>
                <ul>
                  {items.solutionLists.map((solList, solIndex) => (
                    <li key={solIndex}>{solList}</li>
                  ))}
                </ul>
              </div>
            )}
            {items.contactHead && items.infoLists && (
              <div className="footerFourthSection">
                <h1>{items.contactHead}</h1>
                <ul>
                  {items.infoLists.map((infoList, infoIndex) => (
                    <li key={infoIndex}>
                      {items.infoIcons && items.infoIcons[infoIndex]}
                      {infoList}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="footerFifthSection">
          <h1
            style={{
              marginBottom: "38px",
            }}
          >
            Subscribe
          </h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email..."
            style={{
              width: "90%",
              padding: "8px",
              backgroundColor: "rgb(0, 0, 0, 0.7)",
              marginRight: "10px",
              border: "1px solid #fff",
              borderRadius: "1px",
            }}
          />
          <button
            type="button"
            style={{
              width: "90%",
              padding: "8px 16px",
              backgroundColor: "#fff",
              marginTop: "20px",
              color: "#000",
              border: "1px solid #fff",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (
              (e.target.style.backgroundColor = "rgb(0, 0, 0, 0.2)"),
              (e.target.style.color = "cyan")
            )}
            onMouseOut={(e) => (
              (e.target.style.backgroundColor = "#fff"),
              (e.target.style.color = "#000")
            )}
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <hr style={{ borderColor: "white" }} />

      <div className={styles.footerCopyrightSection}>
        <div className={styles.socialIcons}>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaSquareXTwitter />
          </div>
          <div>
            <IoLogoYoutube />
          </div>
        </div>
        <div>
          <h1>
            Theme Source: <a href="https://themeforest.net/">EnvatoMarket</a>
          </h1>
        </div>
      </div>
      <div className={styles.finalTouch}>
        <h1>
          Made With <span style={{ fontSize: "20px" }}>💖</span> by{" "}
          <span>Vishnu Kumar Verma</span>
        </h1>
      </div>
    </div>
  );
}

FooterElements.propTypes = {
  footerData: PropTypes.array.isRequired, // Assuming PropsItems is a string
};

export default FooterElements;
