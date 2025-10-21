import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/ApiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdatequiz";
const TableQuiz = () => {
  const [listQuiz, setListQuiz] = useState([]);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState({});
  const [isShowModalUpdateQuiz, setIsShowModalUpdateQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  useEffect(() => {
    fetchQuiz();
  }, []);
  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res.data && res.data.EC === 0) {
      setListQuiz(res.data.DT);
    }
  };
  const handleDelete = (quiz) => {
    setDataDelete(quiz);
    setIsShowModalDelete(true);
  };
  const handleUpdate = (quiz) => {
    setDataUpdate(quiz);
    setIsShowModalUpdateQuiz(true);
  };
  return (
    <>
      <div>List Quiz:</div>
      <table className="table table-hover table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => handleUpdate(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={isShowModalDelete}
        setShow={setIsShowModalDelete}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
      />
      <ModalUpdateQuiz
        show={isShowModalUpdateQuiz}
        setShow={setIsShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};
export default TableQuiz;
