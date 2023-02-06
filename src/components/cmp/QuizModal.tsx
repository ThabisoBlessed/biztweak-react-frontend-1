import React from "react";
import { ITestAnswer } from "../../model/test-answer.model";

export const QuizModal = (props: any) => {
  return (
    <div>
      <div
        className="modal fade"
        id="quizModal"
        tabIndex={-1}
        aria-labelledby="quizModal"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="modal-body m-0">
              <h4 className="text-dark text-2xl font-medium">
                Preview Question
              </h4>
              <p className="my-3">
                {props.selectedQuiz.question}
              </p>
              <div className="form-group row align-items-center mb-3">
                <div className="col-md-6">
                  {props.selectedAnswers.map((answer: ITestAnswer, index: number) => {
                    return (
                      <div key={index}>
                        <label
                          className="form-check-label"
                          id={`answer_${index}`}
                        >
                          <input
                            type="radio"
                            className="form-check-input"
                            name="answer"
                            autoComplete="off"
                            checked={answer.correct_answer}
                            onChange={() => {}}
                          />
                          &nbsp;{answer.answer}
                        </label>
                        <br></br>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-end">
                <button
                  className="btn btn-sm text-white bg-[#00c2cb]"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
