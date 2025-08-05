import styles from "./ManageUser.module.scss";
import Example from "./Example";
import "./ManageUser.scss"; // Assuming you have a CSS file for styling

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className={styles["title"]}>Manage User Content</div>
      <div className={styles["user-content"]}>
        <div>
          <button>add user</button>
        </div>
        <div>table users</div>
        <Example />
      </div>
    </div>
  );
};

export default ManageUser;
