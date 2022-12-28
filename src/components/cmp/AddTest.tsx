import React from "react";
import { CMPMenu } from "./CMPMenu";
import { TextEditor } from "./TextEditor";

export const AddTest = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <CMPMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <form className="row mt-3">
              <div className="col-md-7">
                <button type="button" className="btn btn-wide bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]">
                  <i className="fa fa-plus"></i> Add Test
                </button>
                <div className="form-group row align-items-center my-3">
                  <div className="col-md-12 bg-white">
                    <TextEditor />
                  </div>
                </div>
                <div className="form-group my-3">
                  <div className="answers">
                    <div className="d-flex align-items-center mb-2 answer">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Answer 1"
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
                  </div>
                  <div className="col-12">
                    <button
                      className="btn bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]"
                      type="button"
                      id="add-answer"
                    >
                      Add Answer
                    </button>
                  </div>
                </div>
                <div className="form-group d-flex justify-content-between my-5">
                  <button className="btn btn-main btn-wide bg-[#6c757d] hover:bg-[#a1b0bc] text-white w-[150px]">
                    Submit Question
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
