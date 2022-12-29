import React, { useState } from "react";

export const Answer = () => {
  const [count, setCount] = useState(0);
  const Input = () => {
    return (
      <div className="d-flex align-items-center mb-2 answer" id={`${count}`}>
        <input
          type="text"
          className="form-control"
          // placeholder={`Answer ${count}`}
          placeholder="Answer"
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
    );
  };
  const init: JSX.Element[] = [<Input key={0} />];
  const [inputList, setInputList] = useState(init);

  const onAddBtnClick = () => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      {inputList}
      <div className="col-12">
        <button
          className="btn bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
          type="button"
          id="add-answer"
          onClick={() => {
            onAddBtnClick();
            setCount(count + 1);
          }}
        >
          Add Answer
        </button>
      </div>
    </div>
  );
};
