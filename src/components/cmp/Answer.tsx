import React, { useEffect, useState } from "react";

export const Answer = () => {
  const [count, setCount] = useState(1);
  const Input = () => {
    return (
      <div>
        <div
          className="d-flex align-items-center mb-2 answer-container"
          id={`${count}`}
        >
          <input
            id={`answer${count}`}
            type="text"
            className="form-control"
            placeholder={`Answer ${count}`}
            onChange={(e) => handleAnswerInput(e.target.value, count)}
          />
          <div className="form-check w-[100%] ms-2">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                autoComplete="off"
                onChange={(e) => handleCorrectAnswer(e.target.value, count)}
              />
              Correct Answer
            </label>
          </div>
        </div>
      </div>
    );
  };
  const init: JSX.Element[] = [];
  const [inputList, setInputList] = useState(init);
  const initAnswers: any[] = [];
  const [answers, setAnswers] = useState(initAnswers);

  const handleAnswerInput = (value: string, id: number) => {
    const storedAnswers: any[] = answers;
    if (storedAnswers.filter(a => a.id === id).length === 0) {
      storedAnswers.push({ id: id, answer: value, correct_answer: "" });
    } else {
      const existing = storedAnswers.find(a => a.id === id);
      existing.answer = value;
    }
    setAnswers(storedAnswers);
  };

  const handleCorrectAnswer = (value: string, id: number) => {
    const storedAnswers: any[] = answers;
    const existing = storedAnswers.find(a => a.id === id);
    existing.correct_answer = value == "on"  ? true : false;
    setAnswers(storedAnswers);

    console.log(answers);
  }

  const onAddBtnClick = () => {
    setCount(count + 1);
    setInputList(inputList.concat(<Input key={inputList.length} />));
    // handleAnswerInput();
  };

  return (
    <div>
      {inputList}
      <div className="col-12">
        <button
          className="btn bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
          type="button"
          id="add-answer"
          onClick={onAddBtnClick}
        >
          Add Answer
        </button>
      </div>
    </div>
  );
};
