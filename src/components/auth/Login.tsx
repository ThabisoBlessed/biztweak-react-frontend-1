import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, LOCALSTORAGE_KEYS, setLocalStorageValue } from "../../config";
import { followInstrunction, loading, login } from "../../constants";
import { ILoginRequest, ILoginResponse } from "../../model/auth.model";
import { userLogin } from "../../services/auth";
import "./Auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginProviderStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
  };

  useEffect(() => {
    if (isLoggedIn()) navigate("/dashboard");
  }, [navigate]);

  const loginWithEmailAndPassword = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    const user = {} as ILoginRequest;
    user.email = email;
    user.password = password;

    const loginResult = await userLogin(user);
    console.log(loginResult);
    if (loginResult.status) {
      setLocalStorageValue(LOCALSTORAGE_KEYS.accessToken, JSON.stringify(loginResult.package.data));
      navigate("/auth/profile");
    }
    setIsLoading(false);
  };

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
                      Login Account
                    </h2>
                    <p className="mb-md-5">{followInstrunction}</p>
                    <form>
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
                          className="form-control text-sm password-input"
                          autoComplete="false"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check ml-2 form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          id="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Keep me logged in
                        </label>
                      </div>
                      <p className="d-block float-none float-md-end text-muted">
                        <Link
                          to="/auth/reset-password"
                          className="text-gray-500"
                        >
                          &nbsp;Forgot your password ?
                        </Link>
                      </p>
                      <div className="clearfix mb-3"></div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <button
                          disabled={isLoading}
                          onClick={(event) => loginWithEmailAndPassword(event)}
                          className="btn btn-lg ml-2 text-white bg-[#00c2cb]"
                        >
                          {isLoading ? (
                            <span className="capitalize">{loading}...</span>
                          ) : (
                            <span className="capitalize">{login}</span>
                          )}
                        </button>
                        <div className="float-none float-md-end">
                          Don't have an Account?
                          <Link to="/auth/register" className="text-[#0d6efd]">
                            &nbsp;Register
                          </Link>
                        </div>
                      </div>
                      <div className="clearfix mb-3"></div>
                      {/* <h6 className="mt-5 mb-3 fw-bold ml-2">Or login with</h6>
                      <div className="d-flex">
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 border me-3">
                          <img
                            style={loginProviderStyles}
                            src="https://biztweak.org.za/public/new/images/icons/google.png"
                            alt="google"
                          />
                          Google
                        </a>
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 me-3 border">
                          <img
                            style={loginProviderStyles}
                            src="https://biztweak.org.za/public/new/images/icons/facebook.png"
                            alt="facebook"
                          />
                          Facebook
                        </a>
                        <a className="btn btn-outline-light text-dark px-3 px-md-5 border">
                          <img
                            style={loginProviderStyles}
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
