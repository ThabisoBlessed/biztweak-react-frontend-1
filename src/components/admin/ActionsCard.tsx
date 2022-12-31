import React, { useState } from "react";
import ClockImg from "../../images/icons/clock.png";
import BulbImg from "../../images/icons/bulb.png";
import DashboardImg from "../../images/icons/dashboard.png";
import PotImg from "../../images/icons/pot.png";

export const ActionsCard = () => {
  const innitActions: any[] = [
    { id: 0, title: "Early stage", src: ClockImg },
    { id: 1, title: "Start up", src: PotImg },
    { id: 2, title: "Idea concept", src: BulbImg },
    { id: 3, title: "Accelerate", src: DashboardImg },
  ];
  const [actions, setActions] = useState(innitActions);

  return (
    <div className="card h-100 shadow">
      <div className="card-header bg-white border-0">
        <h5 className="mb-0 text-2xl font-medium text-dark">Actions</h5>
      </div>
      <div className="card-body border-0">
        <div className="bg-light rounded-3 p-3">
          <div className="row">
            {actions.map((action: any, index: number) => {
              return (
                <div
                  className="col-6 text-center text-dark p-2"
                  key={`action_menu_${index}`}
                >
                  <img
                    src={action.src}
                    className="mx-auto"
                    width="50px"
                    alt=""
                  />
                  <p className="my-2">{action.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
