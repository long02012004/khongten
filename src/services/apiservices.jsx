import axios from "../utils/AxiosCustomize.jsx";
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
export { postCreateNewUser, getAllUser };
