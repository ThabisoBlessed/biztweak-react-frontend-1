import React from "react";
import { useNavigate } from "react-router-dom";

export const CompleteCompanyProfileModal = () => {
  const navigate = useNavigate();

  const onSave = () => {
    navigate("/business/manage-business");
  };

  return (
    <div>
      <div
        className="modal fade"
        id="completeCompanyProfile"
        tabIndex={-1}
        aria-labelledby="completeCompanyProfileLabel"
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
                  src="https://biztweak.org.za/public/new/images/complete-profile.png"
                  alt=""
                  className="col-md-6 img-fluid"
                />
                <h1 className="h3">Complete Company Profile</h1>
                <p>
                  Completing your company information will help us know more
                  about your business. Lets fill the assessment text: Completing
                  your business assessment will help us know what kind of help
                  your business needs.
                </p>
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="okBtn"
                  type="button"
                  className="btn bg-[#00c2cb] btn-info btn-lg mt-2 p-3 w-[100px] text-white"
                  onClick={() => onSave()}
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
