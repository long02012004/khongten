import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/ApiServices";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";
const ListQuiz = () => {
  const [arrQuiz, setArrQuiz] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getQuizData();
  }, []);
  const getQuizData = async () => {
    const res = await getQuizByUser();
    if (res.data && res.data.EC === 0) {
      setArrQuiz(res.data.DT); // ✅ fix chỗ này
    }
  };
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={`${index}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                src={`data:image/jpeg;base64,${quiz.image}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Quiz {index + 1}  </h5>
                <p className="card-text">{quiz.description}</p>
                <button
                  className="btn btn-primary"
                  // điều hướng sang trang chi tiết
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quizTitle: quiz.description }, // để lấy cái tê cho tang con sử dụng
                    })
                  }
                >
                  Start Now
                </button>
              </div>
            </div>
          );
        })}

      {arrQuiz && arrQuiz.length === 0 && (
        <div>you don't have any quiz now...</div>
      )}
    </div>
  );
};
export default ListQuiz;
