/* eslint-disable no-unused-vars */
import styles from "./someworks.module.css";
import projectImg1 from "../../assets/Project-image-1.jpg";
import projectImg2 from "../../assets/Project-image-2.jpg";
import projectImg3 from "../../assets/Project-image-3.jpg";
import projectImg4 from "../../assets/Project-image-4.jpg";
import projectImg5 from "../../assets/Project-image-5.jpg";
import projectImg6 from "../../assets/Project-image-6.jpg";

import { FaSquare } from "react-icons/fa6";
import { FaSquareArrowUpRight } from "react-icons/fa6";


function SomeWorksLong() {
  return (
    <div className={styles.container}>
    <div className={styles.overTitle}>
      <p>OUR PROJECT</p>
    </div>

    <div className={styles.title}>
      <h1>Some of Our Works</h1>
      <div className={styles.titleRight}>
        <FaSquare className={styles.titleIcon} />
        <p>VIEW ALL PROJECTS</p>
      </div>
    </div>      

    <div className={styles.gridContainer}>
      {/* Cell 1 */}
      <div className={styles.cell}>
        <div className={styles.animationType1}>
          <div className={styles.imgContainer}>
            <img src={projectImg1} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>CONTENT & SOCIAL MEDIA MARKETING</p>
          <h2>Content Collaboration</h2>
        </div>
      </div>

      {/* Cell 2 */}
      <div className={styles.cell}>
        <div className={styles.animationType2}>
          <div className={styles.imgContainer}>
            <img src={projectImg3} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>SEARCH ENGINE OPTIMIZATION</p>
          <h2>SEO Analytics & Strategy</h2>
        </div>
      </div>

      {/* Cell 3 */}
      <div className={styles.cell}>
        <div className={styles.animationType3}>
          <div className={styles.imgContainer}>
            <img src={projectImg2} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>WEBSITE DESIGN & DEVELOPMENT</p>
          <h2>E-Commerce Expansion</h2>
        </div>
      </div>

        {/* Cell 4 */}
        <div className={styles.cell}>
        <div className={styles.animationType1}>
          <div className={styles.imgContainer}>
            <img src={projectImg4} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>BRAND STRATEGY & PRODUCTION</p>
          <h2>Product Demo Video</h2>
        </div>
      </div>

      {/* Cell 5 */}
      <div className={styles.cell}>
        <div className={styles.animationType2}>
          <div className={styles.imgContainer}>
            <img src={projectImg6} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>ANALYTICS & DATA ANALYSIS</p>
          <h2>Sales Performance</h2>
        </div>
      </div>

      {/* Cell 6 */}
      <div className={styles.cell}>
        <div className={styles.animationType3}>
          <div className={styles.imgContainer}>
            <img src={projectImg5} alt="" />
            <FaSquare className={styles.iconBackground} />
            <FaSquareArrowUpRight className={styles.iconOnImage} />
          </div>
          <p>PPC & ONLINE ADVERTISING</p>
          <h2>Remarketing Campaign</h2>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default SomeWorksLong