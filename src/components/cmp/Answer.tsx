import React, { useState } from "react";

const Input = () => {
  return (
    <div className="col-12">
      <div className="answers">
        <div className="d-flex align-items-center mb-2 answer">
          <input type="text" className="form-control" placeholder="Answer 1" />
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
};

export const Answer = (props: any) => {
  const init: JSX.Element[] = [<Input key={0} />];
  const [inputList, setInputList] = useState(init);

  const onAddBtnClick = (event: any) => {
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
          onClick={onAddBtnClick}
        >
          Add Answer
        </button>
      </div>
    </div>
  );
};
