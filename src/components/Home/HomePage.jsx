import VideoHomePage from "../../assets/videohome.mp4";
import styles from "./Home.module.scss";
import { Link, Outlet,  NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className={styles["homepage-container"]}>
      <video autoPlay loop muted>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className={styles["homepage-content"]}>
        <h1 className={styles["homepage-title"]}>Welcome to Our Website</h1>
        <p className={styles["homepage-description"]}>
          Discover amazing content and connect with our community.
        </p>
        <button className={styles["homepage-button"]}>Explore Now</button>
      </div>
    </div>
  );
};

export default HomePage;
