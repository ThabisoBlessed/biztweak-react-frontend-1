import React, { useEffect, useState } from "react";
import { Assessment } from "../../model/assessment.model";
import {
  IMappedAssessmentQuestion,
  IQuestion,
} from "../../model/mapped-assessment-question.model";
import { getAssessmentQuestions } from "../../services/assessment";

export const BusinessAssessmentQuestions = () => {
  const questions: Assessment[] = [];
  const [questionList, setQuestionList] = useState(questions);
  const mappedQuestionList: IMappedAssessmentQuestion[] = [];

  useEffect(() => {
    if (questionList.length === 0) {
      assessmentQuestions();
    }

    if (questionList.length > 0) {
      for (let index = 0; index < questionList.length; index++) {
        const question = questionList[index];

        const exist = mappedQuestionList.find((q) => q.category === question.category);
        if (exist) {
          const questionToSave = {} as IQuestion;
          questionToSave.answer = question.answer;
          questionToSave.label = question.label;
          exist.questions.push(questionToSave);
        } else {
          const answer = {} as IMappedAssessmentQuestion;
          answer.id = question.id;
          answer.category = question.category;
          answer.questions = [];

          const questionToSave = {} as IQuestion;
          questionToSave.answer = question.answer;
          questionToSave.label = question.label;
          answer.questions.push(questionToSave);

          mappedQuestionList.push(answer);
        }
      }
    }

    console.log(mappedQuestionList);
  }, [questionList]);

  const assessmentQuestions = async () => {
    const assessmentQuestions = await getAssessmentQuestions();
    setQuestionList(assessmentQuestions.data.package.data);
  };

  return (
    <div>
      <div className="accordion" id="assessment-accordion">
        {questionList.map((question: any, index: number) => {
          return (
            <div
              className="accordion-item bg-[#f1feff]"
              key={`${String(question.category).toLowerCase()}_${index}`}
              id={`${String(question.category).toLowerCase()}_${index}`}
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
                  {question.category}
                </button>
              </h2>
              <div
                id="collapse62"
                className="accordion-collapse collapse show"
                aria-labelledby="heading62"
                data-bs-parent="#assessment-accordion"
              >
                <div className="accordion-body bg-[white]">
                  {/* {question.questions.map((subQuestion: any, index: number) => {
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
                  })} */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
