import { useState, useEffect } from "react";
import { getAllUser } from "../../../services/ApiServices";
const TableUser = () => {
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
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`Table-users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td className="text-center" colSpan={4}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
