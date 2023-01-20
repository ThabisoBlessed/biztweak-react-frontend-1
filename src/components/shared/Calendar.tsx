import { useState } from "preact/hooks";
import React, { useEffect } from "react";
import { AdminMenu } from "../admin/AdminMenu";
import { LMSMenu } from "../lms/LMSMenu";
import { CalendarFull } from "./CalendarFull";
import { DatePicker } from "./DatePicker";
import {
  INITIAL_EVENTS,
  createEventId,
  INITIAL_EVENTS_UPCOMING,
} from "./event-utils";

export const Calendar = (props: any) => {
  useEffect(() => {
    INITIAL_EVENTS_UPCOMING.sort(function compare(a: any, b: any) {
      var dateA = new Date(a.start);
      var dateB = new Date(b.start);
      console.log(dateA, dateB);

      return +dateA - +dateB;
    });
    console.log(INITIAL_EVENTS_UPCOMING);
  });

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

                <div className="card bg-light border-0 mb-4">
                  <div className="card-header border-0 bg-transparent">
                    <h5>Upcoming classes</h5>
                  </div>

                  {INITIAL_EVENTS_UPCOMING.map(
                    (upcoming: any, index: number) => {
                      return (
                        <div className="card-body">
                          <div className="mb-2">
                            <p className="mb-0 text-muted">15 march</p>
                            <div className="mb-2 alert d-flex bg-white align-items-center">
                              <div>09:00</div>
                              <div className="ms-2 border-start ps-2">
                                <small className="text-muted">
                                  GDM 2nd semester
                                </small>
                                <p className="small mb-0">
                                  One-line Drawing Method
                                </p>
                              </div>
                            </div>
                            <div className="alert d-flex bg-white align-items-center">
                              <div>09:00</div>
                              <div className="ms-2 border-start ps-2">
                                <small className="text-muted">
                                  GDM 2nd semester
                                </small>
                                <p className="small mb-0">
                                  One-line Drawing Method
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
