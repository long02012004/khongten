import axios from "../utils/AxiosCustomize.jsx";
import qs from "qs";
const postCreateNewUser = (email, password, username, role, image) => {
  //Chuyển đổi dữ liệu thành định dạng FormData nếu cần thiết API
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("/api/v1/participant", data);
};

const getAllUser = () => {
  return axios.get("/api/v1/participant/all");
};
const putUpdateUser = (id, username, role, image) => {
  //Chuyển đổi dữ liệu thành định dạng FormData nếu cần thiết API
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("/api/v1/participant", data);
};
const deleteUser = (userId) => {
  return axios.delete("/api/v1/participant/", { data: { id: userId } });
};
const getUserWithPaginate = (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (userEmail, userPassword) => {
  return axios.post(
    "/api/v1/login",
    qs.stringify({
      email: userEmail,
      password: userPassword,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
const postSignUp = (userEmail, userPassword, userName) => {
  return axios.post(`/api/v1/register`, {
    email: userEmail,
    password: userPassword,
    username: userName,
  });
};
const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};
const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

// gửi data dạng raw
const postSubmitQuiz = (data) => {
  return axios.post("/api/v1/quiz-submit", { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, image) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.post("/api/v1/quiz", data);
};
const getAllQuizForAdmin = () => {
  return axios.get("/api/v1/quiz/all");
};
const deleteQuizForAdmin = (id) => {
  return axios.delete(`/api/v1/quiz/${id}`);
};
const putUpdateQuizForAdmin =  (id, description, name,difficulty,image) =>{
  const data = new FormData();
  data.append("id", id);
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.put("/api/v1/quiz", data);
}
export {
  postCreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postSignUp,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  deleteQuizForAdmin,
  putUpdateQuizForAdmin
};
