import React, { useEffect, useState } from "react";

export const EntrepreneurStatsModal = (props: any) => {
  const [stats, setStats] = useState({} as any);

  const onClose = () => {};

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
              <h5>Stats:</h5>
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
