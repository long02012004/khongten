import SideBar from "./Sidebar";
import styles from "./Admin.module.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles["admin-container"]}>
      <div className={styles["admin-sidebar"]}>
        <SideBar collapsed={collapsed} />
      </div>
      <div className={styles["admin-content"]}>
        <div className={styles["admin-header"]}>
          <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars>
        </div>
        <div className={styles["admin-main"]}> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
