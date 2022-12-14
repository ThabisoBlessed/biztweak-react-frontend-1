import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginProviderStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial"
  };

  useEffect(() => {
    // if (user) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="w-full bg-[#e5e5e5]">
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
                    <h2 className="text-4xl">Login Account</h2>
                    <p className="mb-md-5">
                      Follow the instructions to make it easier to login and you
                      will be able to explore inside.
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
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-star input-group-text"></i>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          className="form-control text-sm password-input"
                          autoComplete="false"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-check ml-2 form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          id="remember"
                        />
                        <label className="form-check-label" for="remember">
                          
                          Keep me logged in
                        </label>
                      </div>
                      <a
                        href="https://biztweak.org.za/public/password/reset"
                        className="d-block float-none float-md-end text-muted"
                      >
                        Forgot your password ?
                      </a>
                      <div className="clearfix mb-3"></div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <button className="btn btn-lg text-white bg-[#00c2cb]">
                          Login
                        </button>
                        <div className="float-none float-md-end">
                          Don't have an Account?
                          <a className="text-[#0d6efd]" href="https://biztweak.org.za/public/register">
                            &nbsp;Sign up
                          </a>
                        </div>
                      </div>
                      <div className="clearfix mb-3"></div>
                      <h6 className="mt-5 mb-3 fw-bold">Or login with</h6>
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
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3
        className="text-center m-4 text-3xl text-black font-bold"
        id="pageHeader"
      >
        Login
      </h3> */}
      {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-[25%]">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="false"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border 
            rounded w-full py-2 px-3 text-gray-700 mb-3 
            leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            autoComplete="false"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="items-center justify-between">
          <button
            className="hover:bg-[#f7e08c] w-[100%] bg-[#ffd740] text-black font-bold 
            py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <br></br>
          <br></br>
          <div className="font-bold text-sm text-black hover:text-[#ffd740]">
            <Link to="/auth/reset-password">Forgot Password</Link>
          </div>
          <div className="font-bold text-sm text-black hover:text-[#ffd740]">
            <Link to="/auth/register">Don't have an account? Register now.</Link>
          </div>
        </div>
      </form> */}
    </div>
  );
};
