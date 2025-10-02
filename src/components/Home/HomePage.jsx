import VideoHomePage from "../../assets/videohome.mp4";
import styles from "./Home.module.scss";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
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
        {isAuthenticated === false ? (
          <button
            className={styles["homepage-button"]}
            onClick={() => navigate("./login")}
          >
            Explore Now
          </button>
        ) : (
          <button
            className={styles["homepage-button"]}
            onClick={() => navigate("./users")}
          >
            {" "}
            Doing quiz now
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
