import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Assessment } from "../../model/assessment.model";
import { IBusinessMenuBusinessModel } from "../../model/business-menu-business-model";
import {
  IMappedAssessmentQuestion,
  IQuestion,
} from "../../model/mapped-assessment-question.model";
import {
  addAssessmentQuestions,
  getAssessmentQuestions,
} from "../../services/business/assessment.service";

export const BusinessAssessmentQuestions = (props: any) => {
  const navigate = useNavigate();
  const questions: Assessment[] = [];
  const [questionList, setQuestionList] = useState(questions);
  const mappedQuestionList: IMappedAssessmentQuestion[] = [];
  const [mappedQuestions, setMappedQuestions] = useState(mappedQuestionList);
  const [canSave, setCanSave] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();

  // Update existing company
  // If "business" exists then we have an existing company
  const [selectedBusiness] = useState(
    state || ({} as IBusinessMenuBusinessModel)
  );
  const [business, setBusiness] = useState(selectedBusiness.business);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (questionList.length === 0) {
      listAssessmentQuestions();
    }

    if (questionList.length > 0) {
      for (let index = 0; index < questionList.length; index++) {
        const question = questionList[index];
        mapQuestions(question);
      }
    }

    setMappedQuestions(mappedQuestionList);
  }, [questionList]);

  /**
   * Maps question for display
   * @param mappedQuestions
   * @param question
   */
  const mapQuestions = (question: Assessment) => {
    const existing = mappedQuestionList.find(
      (q) => q.category === question.category
    );
    const questionToSave = {} as IQuestion;

    if (existing) {
      questionToSave.answer = question.answer;
      questionToSave.label = question.label;
      questionToSave.id = question.id;
      existing.questions.push(questionToSave);
    } else {
      const answer = {} as IMappedAssessmentQuestion;
      answer.id = question.id;
      answer.category = question.category;
      answer.questions = [];

      questionToSave.answer = question.answer;
      questionToSave.label = question.label;
      questionToSave.id = question.id;
      answer.questions.push(questionToSave);

      mappedQuestionList.push(answer);
    }
  };

  /**
   * Gets assessment question list
   */
  const listAssessmentQuestions = async () => {
    setIsLoading(true);
    const assessmentQuestions = await getAssessmentQuestions();
    setQuestionList(assessmentQuestions.data.package.data);
    setIsLoading(false);
  };

  /**
   * Updates questions with checked answers
   *
   * @param question
   * @param answer
   */
  const questionChecked = (question: IQuestion, answer: string) => {
    for (let index = 0; index < questionList.length; index++) {
      const element = questionList[index];
      if (element.id === question.id) {
        if (element.answer === answer) {
          break;
        } else {
          element.answer = answer;
          break;
        }
      }
    }
    allQuestionsAnswered();
  };

  /**
   * Save updated questions
   */
  const onSave = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (!business) {
      navigate("/business/manage-business/business-profile", {
        state: { questionList },
      });
    } else {
      const update = await addAssessmentQuestions(JSON.stringify(questionList), business.id);
      // Successful call return data, failed call returns response
      const success = update.data;
      if (success) {
        navigate("/business/manage-business/business-health-report");
      }
    }
    setIsLoading(false);
  };

  /**
   * Checks whether all questions are answered
   *
   */
  const allQuestionsAnswered = () => {
    const answered = questionList.filter((q) => q.answer === "yes|no");
    if (answered.length > 0) {
      setCanSave(false);
    } else {
      setCanSave(true);
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1></h1>
      ) : (
        <div>
          <div className="accordion" id="assessment-accordion">
            {mappedQuestions.map((question: any, index: number) => {
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
                      data-bs-target={`#collapse${index}_assessment`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}_assessment`}
                    >
                      {question.category}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}_assessment`}
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading62"
                    data-bs-parent="#assessment-accordion"
                  >
                    <div className="accordion-body bg-[white]">
                      {question.questions.map(
                        (subQuestion: any, index: number) => {
                          return (
                            <div
                              className="question mb-3"
                              key={`${String(subQuestion.label)
                                .toLowerCase()
                                .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                              id={`${String(subQuestion.label)
                                .toLowerCase()
                                .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                            >
                              <p className="mb-1">{subQuestion.label}</p>
                              <label
                                htmlFor={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}_yes`}
                              >
                                Yes
                              </label>
                              <input
                                name={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                                type="radio"
                                value="1"
                                id={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}_yes`}
                                className="m-2"
                                onChange={() =>
                                  questionChecked(subQuestion, "yes")
                                }
                              />
                              <label
                                htmlFor={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}_no`}
                              >
                                No
                              </label>
                              <input
                                name={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                                type="radio"
                                value="0"
                                id={`${String(subQuestion.label)
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z0-9 ]/g, "")}_no`}
                                className="m-2"
                                onChange={() =>
                                  questionChecked(subQuestion, "no")
                                }
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-end mt-3">
            <button
              type="button"
              className="btn text-white bg-[#00c2cb] hover:bg-[#16f0fb] btn-info btn-lg p-3 w-[100px]"
              // data-bs-toggle="modal"
              // data-bs-target="#completeCompanyProfile"
              onClick={onSave}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
