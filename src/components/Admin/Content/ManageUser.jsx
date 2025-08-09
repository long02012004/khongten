import styles from "./ManageUser.module.scss";

import ModalUpdateUser from "./ModalUpdateUser";
import "./ManageUser.scss"; // Assuming you have a CSS file for styling
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect } from "react";
import { getAllUser } from "../../../services/ApiServices";
import ModalCreateUser from "./ModalCreateUser";

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
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpDate] = useState({});
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpDate(user);
  };
  return (
    <div className={styles["manage-user-container"]}>
      <div className={styles["title"]}>Manage User Content</div>
      <div className={styles["users-content"]}>
        <div className={styles["btn-add-new"]}>
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            {" "}
            <FcPlus /> Add new user
          </button>
        </div>
        <div className={styles["table-users-container"]}>
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
