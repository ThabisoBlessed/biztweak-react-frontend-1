import React from "react";

export const ReportSummaryModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="completeCompanyProfile"
        tabIndex={-1}
        aria-labelledby="showReportSummary"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img
                  src="https://biztweak.org.za/public/new/images/assessment.png"
                  className="col-md-6 img-fluid"
                />
                <h1 className="h3">Checkout your report</h1>
                <p>
                  This report output will display your results in a meaningful
                  way, moreover our system will give you recommendations on what
                  you need to do to address findings of the assessment.
                </p>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="okBtn"
                  type="button"
                  className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
