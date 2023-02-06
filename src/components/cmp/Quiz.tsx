import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ICourse } from "../../model/course.model";
import { IQuiz } from "../../model/quiz.model";
import { ITestAnswer } from "../../model/test-answer.model";
import { deleteQuiz } from "../../services/cmp/course.service";
import { CMPMenu } from "./CMPMenu";
import { QuizModal } from "./QuizModal";

export const Quiz = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedCourse] = useState(state || ({} as ICourse));
  const [updateMode] = useState(selectedCourse.updateMode);
  const [course, setCourse] = useState(selectedCourse.course);
  const quizesInit: IQuiz[] = [];
  const [quizes, setQuizes] = useState(quizesInit);
  const [selectedQuiz, setSelectedQuiz] = useState({} as IQuiz);
  const answersInit: ITestAnswer[] = [];
  const [selectedAnswers, setSelectedAnswers] = useState(answersInit);
  

  useEffect(() => {
    // window.history.pushState(null, "", document.URL);
    // window.addEventListener("popstate", function (event) {
    //   navigate(-1);
    // });
    console.log(selectedQuiz);
    setQuizes(course.tests);
  });

  const onEdit = () => {
    navigate("/cmp/manage-courses/course-info", { state: { course }});
  };

  const onDelete = async (event: any, quiz: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete quiz: \n'${selectedQuiz.question}'`
      )
    ) {
      event.preventDefault();
      const deleted = await deleteQuiz(course.id, quiz.id);
      console.log(deleted);
      window.location.reload();
    }
  };

  const onViewQuiz = (quiz: IQuiz) => {
    setSelectedQuiz(quiz);
    setSelectedAnswers(JSON.parse(quiz.answers))
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <form className="row m-3">
            <div className="col-md-12">
              <h2 className="fw-600 text-dark">{course.title}</h2>
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
                        <td>{quiz.status === "0" ? "Added" : "Unknown"}</td>
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
                            onClick={() => onViewQuiz(quiz)}
                          >
                            <i className="fa fa-search fa-lg"></i>
                          </a>
                          <button
                            className="btn text-dark btn-link"
                            onClick={(event) => { setSelectedQuiz(quiz); onDelete(event, quiz); }}
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

          <QuizModal selectedAnswers={selectedAnswers} selectedQuiz={selectedQuiz} course={course}/>
        </div>
      </div>
    </div>
  );
};
