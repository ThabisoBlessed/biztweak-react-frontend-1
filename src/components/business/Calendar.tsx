import React from "react";
import { LMSMenu } from "../lms/LMSMenu";
import { CalendarItem } from "./CalendarItem";

export const Calendar = () => {
  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 py-4">
                <CalendarItem />
              </div>

              <div className="col-lg-4 bg-white py-4">
                <div className="card bg-light border-0 mb-4">
                  <div className="card-body">
                    <div className="w-100" id="datepicker">
                      <div className="datepicker datepicker-inline">
                        <div className="datepicker-days">
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  December 2022
                                </th>
                                <th className="next">»</th>
                              </tr>
                              <tr>
                                <th className="dow">Su</th>
                                <th className="dow">Mo</th>
                                <th className="dow">Tu</th>
                                <th className="dow">We</th>
                                <th className="dow">Th</th>
                                <th className="dow">Fr</th>
                                <th className="dow">Sa</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  className="old day"
                                  data-date="1669507200000"
                                >
                                  27
                                </td>
                                <td
                                  className="old day"
                                  data-date="1669593600000"
                                >
                                  28
                                </td>
                                <td
                                  className="old day"
                                  data-date="1669680000000"
                                >
                                  29
                                </td>
                                <td
                                  className="old day"
                                  data-date="1669766400000"
                                >
                                  30
                                </td>
                                <td className="day" data-date="1669852800000">
                                  1
                                </td>
                                <td className="day" data-date="1669939200000">
                                  2
                                </td>
                                <td className="day" data-date="1670025600000">
                                  3
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date="1670112000000">
                                  4
                                </td>
                                <td className="day" data-date="1670198400000">
                                  5
                                </td>
                                <td className="day" data-date="1670284800000">
                                  6
                                </td>
                                <td className="day" data-date="1670371200000">
                                  7
                                </td>
                                <td className="day" data-date="1670457600000">
                                  8
                                </td>
                                <td className="day" data-date="1670544000000">
                                  9
                                </td>
                                <td className="day" data-date="1670630400000">
                                  10
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date="1670716800000">
                                  11
                                </td>
                                <td className="day" data-date="1670803200000">
                                  12
                                </td>
                                <td className="day" data-date="1670889600000">
                                  13
                                </td>
                                <td className="day" data-date="1670976000000">
                                  14
                                </td>
                                <td className="day" data-date="1671062400000">
                                  15
                                </td>
                                <td className="day" data-date="1671148800000">
                                  16
                                </td>
                                <td className="day" data-date="1671235200000">
                                  17
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date="1671321600000">
                                  18
                                </td>
                                <td className="day" data-date="1671408000000">
                                  19
                                </td>
                                <td className="day" data-date="1671494400000">
                                  20
                                </td>
                                <td
                                  className="active day"
                                  data-date="1671580800000"
                                >
                                  21
                                </td>
                                <td className="day" data-date="1671667200000">
                                  22
                                </td>
                                <td className="day" data-date="1671753600000">
                                  23
                                </td>
                                <td className="day" data-date="1671840000000">
                                  24
                                </td>
                              </tr>
                              <tr>
                                <td className="day" data-date="1671926400000">
                                  25
                                </td>
                                <td className="day" data-date="1672012800000">
                                  26
                                </td>
                                <td className="day" data-date="1672099200000">
                                  27
                                </td>
                                <td className="day" data-date="1672185600000">
                                  28
                                </td>
                                <td className="day" data-date="1672272000000">
                                  29
                                </td>
                                <td className="day" data-date="1672358400000">
                                  30
                                </td>
                                <td className="day" data-date="1672444800000">
                                  31
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="new day"
                                  data-date="1672531200000"
                                >
                                  1
                                </td>
                                <td
                                  className="new day"
                                  data-date="1672617600000"
                                >
                                  2
                                </td>
                                <td
                                  className="new day"
                                  data-date="1672704000000"
                                >
                                  3
                                </td>
                                <td
                                  className="new day"
                                  data-date="1672790400000"
                                >
                                  4
                                </td>
                                <td
                                  className="new day"
                                  data-date="1672876800000"
                                >
                                  5
                                </td>
                                <td
                                  className="new day"
                                  data-date="1672963200000"
                                >
                                  6
                                </td>
                                <td
                                  className="new day"
                                  data-date="1673049600000"
                                >
                                  7
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-months"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2022
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="month">Jan</span>
                                  <span className="month">Feb</span>
                                  <span className="month">Mar</span>
                                  <span className="month">Apr</span>
                                  <span className="month">May</span>
                                  <span className="month">Jun</span>
                                  <span className="month">Jul</span>
                                  <span className="month">Aug</span>
                                  <span className="month">Sep</span>
                                  <span className="month">Oct</span>
                                  <span className="month">Nov</span>
                                  <span className="month focused active">
                                    Dec
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-years"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2020-2029
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="year old">2019</span>
                                  <span className="year">2020</span>
                                  <span className="year">2021</span>
                                  <span className="year active focused">
                                    2022
                                  </span>
                                  <span className="year">2023</span>
                                  <span className="year">2024</span>
                                  <span className="year">2025</span>
                                  <span className="year">2026</span>
                                  <span className="year">2027</span>
                                  <span className="year">2028</span>
                                  <span className="year">2029</span>
                                  <span className="year new">2030</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-decades"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2000-2090
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="decade old">1990</span>
                                  <span className="decade">2000</span>
                                  <span className="decade">2010</span>
                                  <span className="decade active focused">
                                    2020
                                  </span>
                                  <span className="decade">2030</span>
                                  <span className="decade">2040</span>
                                  <span className="decade">2050</span>
                                  <span className="decade">2060</span>
                                  <span className="decade">2070</span>
                                  <span className="decade">2080</span>
                                  <span className="decade">2090</span>
                                  <span className="decade new">2100</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                        <div
                          className="datepicker-centuries"
                          style={{ display: "none" }}
                        >
                          <table className="table-condensed">
                            <thead>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="datepicker-title"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                              <tr>
                                <th className="prev">«</th>
                                <th colSpan={5} className="datepicker-switch">
                                  2000-2900
                                </th>
                                <th className="next">»</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td colSpan={7}>
                                  <span className="century old">1900</span>
                                  <span className="century active focused">
                                    2000
                                  </span>
                                  <span className="century">2100</span>
                                  <span className="century">2200</span>
                                  <span className="century">2300</span>
                                  <span className="century">2400</span>
                                  <span className="century">2500</span>
                                  <span className="century">2600</span>
                                  <span className="century">2700</span>
                                  <span className="century">2800</span>
                                  <span className="century">2900</span>
                                  <span className="century new">3000</span>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="today"
                                  style={{ display: "none" }}
                                >
                                  Today
                                </th>
                              </tr>
                              <tr>
                                <th
                                  colSpan={7}
                                  className="clear"
                                  style={{ display: "none" }}
                                >
                                  Clear
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-light border-0 mb-4">
                  <div className="card-header border-0 bg-transparent">
                    <h5>Upcoming classes</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <p className="mb-0 text-muted">15 march</p>
                      <div className="mb-2 alert d-flex bg-white align-items-center">
                        <div>09:00</div>
                        <div className="ms-2 border-start ps-2">
                          <small className="text-muted">GDM 2nd semester</small>
                          <p className="small mb-0">One-line Drawing Method</p>
                        </div>
                      </div>
                      <div className="alert d-flex bg-white align-items-center">
                        <div>09:00</div>
                        <div className="ms-2 border-start ps-2">
                          <small className="text-muted">GDM 2nd semester</small>
                          <p className="small mb-0">One-line Drawing Method</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <p className="mb-0 text-muted">17 march</p>
                      <div className="alert d-flex bg-white align-items-center">
                        <div>12:00</div>
                        <div className="ms-2 border-start ps-2">
                          <small className="text-muted">GDM 2nd semester</small>
                          <p className="small mb-0">One-line Drawing Method</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
