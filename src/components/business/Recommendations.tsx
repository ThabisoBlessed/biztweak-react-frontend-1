import { useEffect } from "preact/hooks";
import React, { useState } from "react";

export const Recommendations = (props: any) => {
  const [recommendedModules, setRecommendedModules] = useState(
    props.recommendedModules
  );
  return (
    <div>
      <div className="recommendations bg-primary-light row">
        <div className="alert rounded-0 bg-[#00c2cb] text-center text-white p-4 mb-5">
          <div className="row justify-content-center">
            <p className="col-md-7 mb-0">
              The following are the topics and learning content you need to read
              and implement in order to improve the processes, systems in your
              bussiness, as well as bussiness perfomance
            </p>
          </div>
        </div>
        <div className="row">
          {recommendedModules.map((modules: any, index: number) => {
            return (
              <div className="col-md-6" key={index}>
                <div className="accordion" id="strategy">
                  <div className="accordion-item border-0 mb-2">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button bg-white text-dark fw-normal collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#item-${index}`}
                        aria-expanded="false"
                      >
                        <img
                          src="https://biztweak.org.za/public/new/images/strategic.png"
                          className="me-3 rounded-circle img-fluid h-[50px] w-[50px]"
                          alt=""
                        />
                        {modules[0]}
                      </button>
                    </h2>
                    <div
                      id={`item-${index}`}
                      className="accordion-collapse collapse text-center"
                      data-bs-parent="#strategy"
                    >
                      <div className="accordion-body">
                        {modules[1].map((value: any, index: number) => {
                          return (
                            <p key={index} className="recom lead text-sm m-2">-{value}</p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="alert rounded-0 bg-[#00c2cb] text-center text-white p-4 mb-5">
          <div className="row justify-content-center">
            <p className="col-md-7 mb-0">
              The following are professionals you need in order to improve the
              processes, systems in your bussiness, as well as bussiness
              perfomance.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="accordion" key={"professionals"} id="strategy">
            <div className="accordion-item border-0 mb-2">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-white text-dark fw-normal collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#professionals"
                  aria-expanded="false"
                >
                  <img
                    src="https://biztweak.org.za/public/new/images/skills.png"
                    className="me-3 rounded-circle img-fluid h-[50px] w-[50px]"
                    alt=""
                  />
                  {recommendedModules.length} Skills Required to the business
                </button>
              </h2>
              <div
                id="professionals"
                className="accordion-collapse collapse text-center"
                data-bs-parent="#strategy"
              >
                {/* <div className="accordion-body">
                  {recommendedModules.map(
                    (recommendation: any, index: number) => {
                      return (
                        <p key={index} className="recom lead text-sm m-2">
                          -{recommendation}
                        </p>
                      );
                    }
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
