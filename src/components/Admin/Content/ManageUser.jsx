import styles from "./ManageUser.module.scss";
import Example from "./Example";
import "./ManageUser.scss"; // Assuming you have a CSS file for styling
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showExample, setShowExample] = useState(false);
  return (
    <div className={styles["manage-user-container"]}>
      <div className={styles["title"]}>Manage User Content</div>
      <div className={styles["users-content"]}>
        <div className={styles["btn-add-new"]}>
          <button
            className="btn btn-primary"
            onClick={() => setShowExample(true)}
          >
            {" "}
            <FcPlus /> Add new user
          </button>
        </div>
        <div className={styles["table-users-container"]}>
          <TableUser />
        </div>
        <Example show={showExample} setShow={setShowExample} />
      </div>
    </div>
  );
};

export default ManageUser;
