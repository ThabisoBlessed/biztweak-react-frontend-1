import { ProfileMenu } from "./ProfileMenu";
import "./Profile.css";
import { UpdateProfile } from "./UpdateProfile";
import { ManageCompany } from "./ManageCompany";
import { useState } from "react";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
          <div className="row justify-content-center">
            <img
              src="https://biztweak.org.za/public/new/images/dashboard-placeholder.png"
              className="img-fluid col-md-5"
              alt=""
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-outline-info dotted-border col-12 mb-2 btn-lg"
              >
                <i className="fa fa-plus"></i> Add Company
              </button>
              <p className="text-center">
                After completing the assessment you will get a business health
                report that will give you recommendations on
              </p>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
