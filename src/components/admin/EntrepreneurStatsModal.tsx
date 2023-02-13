import React, { useEffect, useState } from "react";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllEntrepreneurs, getAllUsers } from "../../services/admin/admin.service";
import { getAssessments } from "../../services/business/assessment.service";

export const EntrepreneurStatsModal = (props: any) => {
  const [stats, setStats] = useState({} as any);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitLoad, setIsInitLoad] = useState(true);

  useEffect(() => {
    if (isInitLoad) {
      getusers();
      getAllAssessments();
    }
    setIsInitLoad(false);
  });

  const getusers = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const usersResult = await getAllEntrepreneurs();
      const usersBody = usersResult.data.package.data;
      setUsers(usersBody);
      console.log(users);
    }
  };

  const getAllAssessments = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const assessmentsResult = await getAssessments();
      const assessments = assessmentsResult.data.package.data;
      console.log(assessments);
    }
  };

  const onClose = () => {};

  const getEntrepreneurs = () => {

  }

  return (
    <div>
      <div
        className="modal fade"
        id="entrepreneurStats"
        tabIndex={-1}
        aria-labelledby="entrepreneurStatsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="text-center text-2xl">Stats:</h2>
              <br></br>
              <p>Total Users: {users.length}</p>
              <p>Total Assessments: {users.length}</p>
              <p>Incomplete Assessments Counts: {users.length}</p>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn bg-[#00c2cb] p-3 w-[100px] btn-info text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => onClose()}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
