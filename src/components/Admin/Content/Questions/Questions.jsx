import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { LuBadgePlus } from "react-icons/lu";
import { LuBadgeMinus } from "react-icons/lu";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { LuImagePlus } from "react-icons/lu";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedQuiz, setSelectQuiz] = useState({});
  return (
    <>
      <div className="questions-container">
        <div className="title">Manage Questions</div>
        <hr />
        <div className="add-new-question">
          <div className="col-6 form-group">
            <label className="mb-2">Select Quiz:</label>
            <Select
              defaultValue={selectedQuiz}
              onChange={setSelectQuiz}
              options={options}
            />
          </div>
          <div className="mt-3 mb-2">Add-questions:</div>
          <div>
            <div className="questions-content">
              <div className="form-floating description">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label> Question's Description</label>
              </div>
              <div className="group-upload">
                <label>
                  <LuImagePlus className="label-upload" />
                </label>
                <input type="file" hidden />
                <span>0 file is uploaded</span>
              </div>
              <div className="btn-add">
                <span>
                  <LuBadgePlus className="icon-add" />
                </span>
                <span>
                  <LuBadgeMinus className="icon-remove" />
                </span>
              </div>
            </div>
            <div className="answers-content">
              <input className="form-check-input is-correct" type="checkbox" />
              <div className="form-floating answer-name">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label>Answer 1</label>
              </div>
              <div className="btn-group">
                <span>
                  <CiCirclePlus className="icon-add" />
                </span>
                <span>
                  <CiCircleMinus className="icon-remove" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Questions;
