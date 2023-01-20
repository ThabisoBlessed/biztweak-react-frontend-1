import { useState } from "preact/hooks";
import React, { useEffect } from "react";
import { AdminMenu } from "../admin/AdminMenu";
import { LMSMenu } from "../lms/LMSMenu";
import { CalendarFull } from "./CalendarFull";
import { DatePicker } from "./DatePicker";

export const Calendar = (props: any) => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          {props.menu === "lms" ? <LMSMenu /> : null}
          {props.menu === "admin" ? <AdminMenu /> : null}
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 py-4">
                <CalendarFull />
              </div>

              <div className="col-lg-4 bg-white py-4">
                <div className="card bg-light border-0 mb-4">
                  <div className="card-body">
                    <div className="w-100" id="datepicker">
                      <DatePicker />
                    </div>
                  </div>
                </div>

                <div className="card bg-light border-0 mb-4 overflow-y-scroll h-[300px]">
                  <>
                    {props.INITIAL_EVENTS_UPCOMING.map(
                      (upcoming: any, index: number) => {
                        return (
                          <div className="card-body">
                            <div className="mb-2">
                              <p className="mb-0 text-muted">
                                {upcoming.start}
                              </p>
                              <div className="mb-2 alert d-flex bg-white align-items-center">
                                <div>09:00</div>
                                <div className="ms-2 border-start ps-2">
                                  <small className="text-muted">
                                    GDM 2nd semester
                                  </small>
                                  <p className="small mb-0">{upcoming.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
