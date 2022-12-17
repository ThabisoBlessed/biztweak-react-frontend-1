import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../config";
import { createAnAccount, followInstrunction } from "../../constants";
import { IRegisterRequest } from "../../model/auth.model";
import { userRegister } from "../../services/auth";

export const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerProviderStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  };

  useEffect(() => {
    if (isLoggedIn()) navigate("/dashboard");
  }, [navigate]);

  const registerWithEmailAndPassword = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    const userRegistration = {} as IRegisterRequest;
    userRegistration.email = email;
    userRegistration.fullname = fullname;
    userRegistration.password = password;
    userRegistration.confirmPassword = confirmPassword;

    if (password === confirmPassword) {
      const register = await userRegister(userRegistration);
      console.log(register);
      if (register.status) {
        navigate("/auth/login");
      }
    }
   
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-[#e5e5e5] text-dark">
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
                      {createAnAccount}
                    </h2>
                    <p className="mb-md-5">
                      {followInstrunction}
                    </p>
                    <form>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-user input-group-text"></i>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Full Name"
                          className="form-control text-sm"
                          autoComplete="false"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-envelope input-group-text"></i>
                        <input
                          id="email"
                          type="email"
                          placeholder="E-mail address"
                          className="form-control "
                          autoComplete="false"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-star input-group-text"></i>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          className="form-control text-sm"
                          autoComplete="false"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-star input-group-text"></i>
                        <input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm Password"
                          className="form-control text-sm"
                          autoComplete="false"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="clearfix mb-3"></div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <button
                          disabled={isLoading}
                          onClick={(event) =>
                            registerWithEmailAndPassword(event)
                          }
                          className="btn btn-lg ml-2 text-white bg-[#00c2cb]"
                        >
                          {isLoading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Create Account</span>
                          )}
                        </button>
                        <div className="float-none float-md-end">
                          Already have an Account?
                          <Link to="/auth/login" className="text-[#0d6efd]">
                            &nbsp;Sign in
                          </Link>
                        </div>
                      </div>
                      <div className="clearfix mb-3"></div>
                      {/* <h6 className="mt-5 mb-3 fw-bold ml-2">Or connect with</h6>
                      <div className="d-flex">
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 border me-3">
                          <img
                            style={registerProviderStyles}
                            src="https://biztweak.org.za/public/new/images/icons/google.png"
                            alt="google"
                          />
                          Google
                        </a>
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 me-3 border">
                          <img
                            style={registerProviderStyles}
                            src="https://biztweak.org.za/public/new/images/icons/facebook.png"
                            alt="facebook"
                          />
                          Facebook
                        </a>
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 border">
                          <img
                            style={registerProviderStyles}
                            src="https://biztweak.org.za/public/new/images/icons/linkedin.png"
                            alt="linkedin"
                          />
                          Linkedin
                        </a>
                      </div> */}
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
