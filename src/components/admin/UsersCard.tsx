import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarImg from "../../images/avatar.png";

export const UsersCard = (props: any) => {
  const navigate = useNavigate();
  const initUsers: any[] = [
    {
      id: 0,
      name: "Jazmyn",
      email: "@jaz.designer",
      lastSeen: "8 hours ago",
      src: AvatarImg,
    },
    {
      id: 1,
      name: "Jane",
      email: "@jane.designer",
      lastSeen: "10 hours ago",
      src: AvatarImg,
    },
    {
      id: 2,
      name: "Mpho",
      email: "@mpho.developer",
      lastSeen: "8 hours ago",
      src: AvatarImg,
    },
  ];
  const [users, setUsers] = useState(props.users);
  const [userMode, setUserMode] = useState(props.userMode);

  const onGoToUsers = () => {
    console.log(userMode);
    console.log(users);
    navigate("/admin/users", { state: { userMode } });
  };

  return (
    <div className="card h-100 shadow">
      <div className="card-header bg-white border-0 d-flex justify-content-between">
        <h5 className="mb-0 text-2xl font-medium text-dark">Users</h5>
        <button onClick={onGoToUsers}>See all</button>
      </div>
      <div className="card-body border-0">
        <div className="overflow-y-scroll h-[200px]" id="users">
          {users.map((user: any, index: number) => {
            return (
              <div
                className="d-flex mb-3 cursor-pointer"
                key={`action_menu_${index}`}
              >
                <div>
                  <img
                    src={AvatarImg}
                    className="rounded-circle h-[40px]"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 font-medium text-1xl">
                    <span className="text-dark">{user.name}</span>
                    <span className="text-muted">{user.email}</span>
                  </h6>
                  <p>{user.lastSeen}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="btn text-white bg-[#00c2cb] hover:bg-[#16f0fb] rounded-md w-full">
          Send email
        </button>
      </div>
    </div>
  );
};
