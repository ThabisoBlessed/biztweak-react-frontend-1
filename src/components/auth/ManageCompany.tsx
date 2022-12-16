import React, { useState } from "react";
import { AddBusinessModal } from "../modals/AddBusinessModal";

export const ManageCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="alert alert-info mt-4">
        <strong>
          <i className="fa fa-info-circle"></i> Next Step!
        </strong>{" "}
        Complete your Company Assessment.
      </div>



      <button
        type="button"
        className="btn btn-info btn-lg"
        onClick={() => setIsOpen(true)}
        data-toggle="modal"
        data-target="#myModal"
      >
        Open Modal
      </button>
      {isOpen && <AddBusinessModal setIsOpen={setIsOpen} />}
    </div>
  );
};
