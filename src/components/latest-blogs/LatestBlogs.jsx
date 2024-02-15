/* eslint-disable no-unused-vars */
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import blogImg4 from "../../assets/Blog-Image-4.jpg";
import blogImg5 from "../../assets/Blog-Image-5.jpg";
import styles from "./latestblogs.module.css";

function LatestBlogs() {
  return (
    <div className={styles.container}>
      <div className={styles.topTitle}>
        <div className={styles.topTitleLeft}>
          <p>OUR BLOG</p>
          <h1>Stay Ahead with Our Latest Blog Posts</h1>
        </div>
        <div className={styles.topTitleRight}>
          <p className={styles.topParagraph}>
            Morbi porta, nibh eu semper semper, orci felis volutpat orci, vel
            blandit magna massa vitae lacus. Ut erat neque, facilisis in laoreet
            id.
          </p>

          <div className={styles.linkToBlogs}>
            <FaSquare className={styles.topIcon} />
            <p>VIEW ALL BLOGS</p>
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>

        <div className={styles.box}>
        <div className={styles.imageContainer}>
          <img src={blogImg5} alt="" className={styles.blogImage}/>
        </div>
       
          <div className={styles.blogSummary}>
            <div className={styles.overTitle}>
              <div className={styles.overTitleLeft}>
                <FaRegCalendarAlt className={styles.blogIcon} />
                <p>September 27, 2023</p>
              </div>
              <div className={styles.overTitleRight}>
                <FaBlog className={styles.blogIcon} />
                <p>Blog</p>
              </div>
            </div>
            <h2>User-Centered Design: A Deep Dive into the UI/UX Process</h2>
            <p className={styles.blogText}>
              Veritatis nobis aliquam eum omnis tempora, obcaecati sapiente
              dolore culpa dolores quo numquam cum enim?
            </p>
            <div className={styles.footr}>
              <h4>READ MORE</h4>
              <FaArrowRight />
            </div>
          </div>
        </div>
        

        <div className={styles.box}>
        <div className={styles.imageContainer}>
          <img src={blogImg4} alt="" className={styles.blogImage}/>
        </div>

          <div className={styles.blogSummary}>
            <div className={styles.overTitle}>
              <div className={styles.overTitleLeft}>
                <FaRegCalendarAlt className={styles.blogIcon} />
                <p>September 27, 2023</p>
              </div>
              <div className={styles.overTitleRight}>
                <FaBlog className={styles.blogIcon} />
                <p>Blog</p>
              </div>
            </div>
            <h2>Local SEO Secrets: Strategies Used by Top Digital Agencies</h2>
            <p className={styles.blogText}>
              Beatae laborum architecto dolore animi quos, corporis incidunt
              voluptatibus dignissimos aliquid maxime eos voluptas fugiat...
            </p>
            <div className={styles.footr}>
              <h4>READ MORE</h4>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
