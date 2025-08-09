import styles from "./ManageUser.module.scss";
import Example from "./Example";
import "./ManageUser.scss"; // Assuming you have a CSS file for styling
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect } from "react";
import { getAllUser } from "../../../services/ApiServices";

const ManageUser = () => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUser();
    console.log("API response:", res); // để kiểm tra
    if (res.data.EC === 0) {
      setListUsers(res.data.DT);
    }
  };
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
          <TableUser listUsers={listUsers} />
        </div>
        <Example
          show={showExample}
          setShow={setShowExample}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
