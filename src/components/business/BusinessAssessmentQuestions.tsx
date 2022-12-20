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
  const [mappedQuestions, setMappedQuestions] = useState(mappedQuestionList);
  const question = {} as IQuestion;
  const [checkedQuestion, setCheckedQuestion] = useState(question);
  const [checkedAnswer, setCheckedAnswer] = useState("");

  useEffect(() => {
    if (questionList.length === 0) {
      assessmentQuestions();
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
  const assessmentQuestions = async () => {
    const assessmentQuestions = await getAssessmentQuestions();
    setQuestionList(assessmentQuestions.data.package.data);
  };

  const questionChecked = (question: IQuestion, answer: string) => {
    setCheckedQuestion(question);
    setCheckedAnswer(answer);
  }

  const mainQuestion = (mapped: IMappedAssessmentQuestion) => {
    const questionAndAnswer = mappedQuestions.find(m => m.id === mapped.id);
    if (questionAndAnswer) {
      const checked = questionAndAnswer.questions.find(q => q.id === checkedQuestion.id);
      if (checked) {
        checked.answer = checkedAnswer;
      }
    }

    console.log(mappedQuestions);
  }

  return (
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
                  {question.questions.map((subQuestion: any, index: number) => {
                    return (
                      <div
                        className="question mb-3"
                        key={`${String(subQuestion.label)
                          .toLowerCase()
                          .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                        id={`${String(subQuestion.label)
                          .toLowerCase()
                          .replace(/[^a-zA-Z0-9 ]/g, "")}`}
                        onChange={() => mainQuestion(question)}
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
                          onChange={() => questionChecked(subQuestion ,"yes")}
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
                          onChange={() => questionChecked(subQuestion ,"no")}
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
