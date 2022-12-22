import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="w-full h-[90vh] bg-[#e5e5e5] text-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row align-items-center">
              <div className="col-md-5">
                <img
                  src="https://biztweak.org.za/public/new/images/auth.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="card p-3 p-md-5 mt-5 mb-5">
                  <div className="card-body">
                    <h2 className="text-4xl" style={{ fontSize: "40px" }}>
                      Reset Password
                    </h2>
                    <p className="mb-md-5">
                      Follow the instructions to reset your password.
                    </p>
                    <form>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-envelope input-group-text"></i>
                        <input
                          id="email"
                          type="email"
                          placeholder="E-mail address"
                          className="form-control "
                          autoComplete="false"
                        />
                      </div>
                      <p className="d-block float-none float-md-end text-muted mr-2">
                        <Link
                          to="/auth/login"
                          className="text-gray-500"
                        >
                          Login
                        </Link>
                      </p>
                      <div className="clearfix mb-3"></div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <button className="btn btn-lg ml-2 w-[150px] text-white bg-[#00c2cb] hover:bg-[#16f0fb]">
                          Reset Password
                        </button>
                        <div className="float-none float-md-end">
                          Don't have an Account?
                          <Link to="/auth/register" className="text-[#0d6efd]">
                            &nbsp;Register
                          </Link>
                        </div>
                      </div>
                      <div className="clearfix mb-3"></div>
                    </form>
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
