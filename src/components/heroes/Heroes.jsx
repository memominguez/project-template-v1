/* eslint-disable no-unused-vars */
import styles from "./heroes.module.css";
import { periodCalc } from "./periodCalc";
import Stopwatch from "./Stopwatch";
import GetPersons from "./GetPersons";
import heroesImg from "../../assets/Hero-image-2.jpg";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

function Heroes() {
  // THE LOGIC BELOW FOR THE COMPONENT'S RIGHT COLUMN

  // The "count" values below to be updated by periodical website maintenance
  // or provide the value from some source, like a backend.
  // Those values shown are just dummy values, for testing

  // The stopwatches' speed is set depending on the "count" value.
  // For a higher "count" value, a higher stopwatch speed.

  // So the stopwatches should run during a period plus/minus 5 seconds,
  // before showing the final value

  const countYearsExperience = 9; // Dummy value, for testing
  const periodYearsExperience = periodCalc(countYearsExperience);
  const suffixYearsExperience = <sup> th</sup>;

  const countProjectsCompleted = 85; // Dummy value, for testing
  const periodProjectsCompleted = periodCalc(countProjectsCompleted);
  const suffixProjectsCompleted = <span> +</span>;

  const countHappyClients = 250; // Dummy value, for testing
  const periodHappyClients = periodCalc(countHappyClients);
  const suffixHappyClients = <span> +</span>;

  const countWinAwards = 32; // Dummy value, for testing
  const periodWinAwards = periodCalc(countWinAwards);
  const suffixWinAwards = <span> +</span>;

  return (
    <div className={styles.container}>
      {/* **************** Left Column ********************** */}
      <div className={styles.leftColumn}>
        <div className={styles.leftContent}>
          <h1>Heroes of Pixels & Code</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            totam mollitia ea accusamus repellendus architecto explicabo
            laboriosam labore saepe, vitae vero voluptatem, exercitationem,
            quisquam dolor est soluta!
          </p>

          {/* Contact Information */}
          <div className={styles.contacting}>
            <div className={styles.iconContainer}>
              <FaPhone className={styles.icons} />
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+123-234-1234</p>
            </div>
            <div className={styles.iconContainer}>
              <FaRegEnvelope className={styles.icons} />
            </div>
            <div>
              <h4>Email Us</h4>
              <p>hello@awesomesite.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ******************** Center Column ******************** */}
      <div className={styles.centerColumn}>
        <div className={styles.imgContainer}>
          <img
            src={heroesImg}
            alt="Heroes Image"
            className={styles.heroesImg}
          />
        </div>

        <div className={styles.personsContainer}>
          <div className={styles.gridLeft}>
            <GetPersons />
          </div>
          <div className={styles.gridRight}>
            <h3>250 Business People</h3>
            <p>Already Registered</p>
          </div>
        </div>
      </div>      

      {/* *********************** Right Column ******************** */}
      <div className={styles.rightColumn}>
        <div className={styles.infoBlock}>
          <Stopwatch
            maxCount={countYearsExperience}
            period={periodYearsExperience}
            suffix={suffixYearsExperience}
          />
          <p>Years Experience</p>
        </div>

        <div className={styles.infoBlock}>
          <Stopwatch
            maxCount={countProjectsCompleted}
            period={periodProjectsCompleted}
            suffix={suffixProjectsCompleted}
          />
          <p>Projects Completed</p>
        </div>

        <div className={styles.infoBlock}>
          <Stopwatch
            maxCount={countHappyClients}
            period={periodHappyClients}
            suffix={suffixHappyClients}
          />
          <p>Happy Clients</p>
        </div>

        <div className={styles.infoBlock}>
          <Stopwatch
            maxCount={countWinAwards}
            period={periodWinAwards}
            suffix={suffixWinAwards}
          />
          <p>Win Awards</p>
        </div>
      </div>
    </div>
  );
}

export default Heroes;
