/* eslint-disable no-unused-vars */
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import teamImg1 from "../../assets/Team-image-1.jpg";
import teamImg2 from "../../assets/Team-image-2.jpg";
import teamImg5 from "../../assets/Team-image-5.jpg";
import teamImg8 from "../../assets/Team-image-8.jpg";
import styles from "./thefaces.module.css";

const TheFaces = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overTitle}>
        <p>OUR TEAM</p>
      </div>
      <div className={styles.title}>
        <h1>The Team Faces</h1>
        <div className={styles.titleRight}>
          <FaSquare className={styles.titleIcon} />
          <p>VIEW ALL TEAM</p>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.cell}>
          <div className={styles.cellTop}>
            <img src={teamImg1} alt="" />
          </div>
          <div className={styles.cellBottom}>
            <h2>G. Hardigaluh</h2>
            <p>Founder</p>
            <div className={styles.social}>
              <FaFacebookSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaTwitterSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaInstagramSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaLinkedin className={styles.icon} />
              <FaSquare className={styles.iconBack} />
            </div>
          </div>
        </div>
        
        <div className={styles.cell}>
          <div className={styles.cellTop}>
            <img src={teamImg2} alt="" />
          </div>
          <div className={styles.cellBottom}>
            <h2>Amy Margareth</h2>
            <p>Creative Director</p>
            <div className={styles.social}>
              <FaFacebookSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaTwitterSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaInstagramSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaLinkedin className={styles.icon} />
              <FaSquare className={styles.iconBack} />
            </div>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.cellTop}>
            <img src={teamImg8} alt="" />
          </div>
          <div className={styles.cellBottom}>
            <h2>Noah Alexander</h2>
            <p>Project Manager</p>
            <div className={styles.social}>
              <FaFacebookSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaTwitterSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaInstagramSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaLinkedin className={styles.icon} />
              <FaSquare className={styles.iconBack} />
            </div>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.cellTop}>
            <img src={teamImg5} alt="" />
          </div>
          <div className={styles.cellBottom}>
            <h2>Scarlett Victoria</h2>
            <p>SEO Specialist</p>
            <div className={styles.social}>
              <FaFacebookSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaTwitterSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaInstagramSquare className={styles.icon} />
              <FaSquare className={styles.iconBack} />
              <FaLinkedin className={styles.icon} />
              <FaSquare className={styles.iconBack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFaces;
