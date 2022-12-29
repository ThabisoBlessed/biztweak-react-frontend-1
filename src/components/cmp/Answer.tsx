import React, { useEffect, useState } from "react";
import { ITestAnswer } from "../../model/test-answer.model";

export const Answer = () => {
  const initAnswers: ITestAnswer[] = [];
  const [answers, setAnswers] = useState(initAnswers);

  useEffect(() => {
    setAnswers([{ id: 0, value: "" }]);
  });

  return (
    <div className="form-group my-3">
      {answers.map((answer: ITestAnswer, index: number) => {
        return (
          <div key={index} id={index.toString()}>
            <div className="answers">
              <div className="d-flex align-items-center mb-2 answer">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Answer 1"
                />
                <div className="form-check w-[100%] ms-2">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="answer"
                      autoComplete="off"
                    />
                    Correct Answer
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-12">
        <button
          className="btn bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
          type="button"
          id="add-answer"
        >
          Add Answer
        </button>
      </div>
    </div>
  );
};
