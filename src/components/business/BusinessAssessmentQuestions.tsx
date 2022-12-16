import React from "react";

export const BusinessAssessmentQuestions = (props: any) => {
  return (
    <div>
      <div className="accordion" id="assessment-accordion">
        {props.questionList.map((question: any, index: number) => {
          return (
            <div
              className="accordion-item bg-[#f1feff]"
              key={`${String(question.name).toLowerCase()}_${index}`}
              id={`${String(question.name).toLowerCase()}_${index}`}
            >
              <h2 className="accordion-header" id="heading62">
                <button
                  className="accordion-button collapsed text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse62"
                  aria-expanded="false"
                  aria-controls="collapse62"
                >
                  {question.name}
                </button>
              </h2>
              <div
                id="collapse62"
                className="accordion-collapse collapse show"
                aria-labelledby="heading62"
                data-bs-parent="#assessment-accordion"
              >
                <div className="accordion-body bg-[white]">
                  {question.questions.map((subQuestion: any, index: number) => {
                    return (
                      <div
                        className="question mb-3"
                        key={`${String(subQuestion.value).toLowerCase()}`}
                        id={`${String(subQuestion.value).toLowerCase()}`}
                      >
                        <p className="mb-1">{subQuestion.value}</p>
                        <label
                          htmlFor={`${String(
                            subQuestion.value
                          ).toLowerCase()}_yes`}
                        >
                          Yes
                        </label>
                        <input
                          name={`${String(subQuestion.value).toLowerCase()}`}
                          type="radio"
                          value="1"
                          id={`${String(subQuestion.value).toLowerCase()}_yes`}
                          className="m-2"
                        />
                        <label
                          htmlFor={`${String(
                            subQuestion.value
                          ).toLowerCase()}_no`}
                        >
                          No
                        </label>
                        <input
                          name={`${String(subQuestion.value).toLowerCase()}`}
                          type="radio"
                          value="0"
                          id={`${String(subQuestion.value).toLowerCase()}_no`}
                          className="m-2"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
