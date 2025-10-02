import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/ApiServices";
import _ from "lodash";
import User from "./User";
const DetailQuiz = () => {
  const params = useParams();
  const quizId = params.id;

  //dùng để cập nhật lại danh sách khi id thay đổi
  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  // lấy toàn bộ câu hỏi
  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    if (res && res.data.EC === 0) {
      // dung
      let raw = res.data.DT;
      let data = _.chain(raw)
        //Nhóm dữ liệu theo id
        .groupBy("id")
        //Sau đó biến đổi thành mảng dễ xử lý, trong đó mỗi phần tử
        // chứa questionId và data (danh sách các object thuộc cùng một id).
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if(index === 0){
              questionDescription = item.description,
              image= item.image;  
            }
            answers.push(item.answers);
          });
          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log(data);
    }
    console.log("check question", res);
  };
  return (
    <>
      <div className="detail-quiz-container">Detail</div>
    </>
  );
};
export default DetailQuiz;
