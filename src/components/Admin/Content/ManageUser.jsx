import styles from "./ManageUser.module.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect, use } from "react";
import { getAllUser } from "../../../services/ApiServices";

const ManageUser = () => {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUser();
    if (res.data.EC === 0) {
      setListUsers(res.data.DT);
    }
  };
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpDate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const handleClickBtnUpdate = (user) => {
    setDataUpDate(user);
    setShowModalUpdateUser(true);
  };
  const resetUpdateData = () => {
    setDataUpDate({});
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataUpDate(user);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
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
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
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
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
        />
      </div>
    </div>
  );
};

export default ManageUser;
