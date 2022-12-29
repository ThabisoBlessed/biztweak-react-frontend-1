import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IQuiz } from "../../model/quiz.model";
import { CMPMenu } from "./CMPMenu";
import { QuizModal } from "./QuizModal";

export const Quiz = () => {
  const navigate = useNavigate();
  const quizes: IQuiz[] = [
    {
      status: "Added",
      question:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  const [quiz, setQuiz] = useState(quizes);

  const onEdit = () => {
    navigate("/cmp/manage-courses/course-info");
  };

  const onDelete = () => {};

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <form className="row m-3">
            <div className="col-md-12">
              <h2 className="fw-600 text-dark">Test Name</h2>
              <table className="table">
                <thead className="bg-[#00c2cb]">
                  <tr>
                    <th className="text-white fw-600">Status</th>
                    <th className="text-white fw-600">Question</th>
                    <th className="text-white fw-600">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {quizes.map((quiz: IQuiz, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{quiz.status}</td>
                        <td>{quiz.question}</td>
                        <td>
                          <button
                            className="btn text-dark btn-link"
                            onClick={onEdit}
                          >
                            <i className="fa fa-edit fa-lg"></i>
                          </button>
                          <a
                            className="btn text-dark btn-link"
                            data-bs-toggle="modal"
                            data-bs-target="#quizModal"
                            href="#quizModal"
                          >
                            <i className="fa fa-search fa-lg"></i>
                          </a>
                          <button
                            className="btn text-dark btn-link"
                            onClick={onDelete}
                          >
                            <i className="fa fa-trash fa-lg"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>

          <QuizModal />
        </div>
      </div>
    </div>
  );
};
