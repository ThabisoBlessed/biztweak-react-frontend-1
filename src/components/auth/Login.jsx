import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginProviderStyles = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  useEffect(() => {
    // if (user) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="w-full h-[700px] bg-[#e5e5e5]">
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
                <div className="card p-3 p-md-5">
                  <div className="card-body">
                    <h2>Login Account</h2>
                    <p className="mb-md-5">
                      Follow the instructions to make it easier to login and you
                      will be able to explore inside.
                    </p>
                    <form>
                      {/* <input
                        type="hidden"
                        name="_token"
                        value="QARW69hx7NbC70BXmXZ4HkLtiWSVZriJ0cU3eIor"
                      /> */}
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-envelope input-group-text"></i>
                        {/* <input
                          id="email"
                          type="email"
                          placeholder="E-mail address"
                          className="form-control "
                          name="email"
                          value=""
                          required=""
                          autoComplete="email"
                          autoFocus=""
                          style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmJJREFUWAntV7uKIkEUvbYGM4KID3wEIgjKRLLpKGLgFwiCfslGhkb7IbLgAzE1GhMxWxRRBEEwmEgDERWfW6fXuttq60a2wU6B1qlzb9U5fatsKROJVigUArvd7oeAyePx6Af3qGYymT7F2h8Wi+V7Pp+fmE7iv4Sw81GieusKIzNh4puCJzdaHIagCW1F4KSeQ4O4pPLoPb/3INBGBZ7avgz8fxWIxWIUCoX43Blegbe3NwoGg88zwMoncFUB8Yokj8dDdrv9MpfHVquV/H4/iVcpc1qgKAp5vV6y2WxaWhefreB0OimXy6kGkD0YDKhSqdB2u+XJqVSK4vE4QWS5XKrx0WjEcZ/PR9lslhwOh8p1Oh2q1Wp0OBw4RwvOKpBOp1kcSdivZPLvmxrjRCKhiiOOSmQyGXp5ecFQbRhLcRDRaJTe39//BHW+2cDr6ysFAoGrlEgkwpwWS1I7z+VykdvtliHuw+Ew40vABvb7Pf6hLuMk/rGY02ImBZC8dqv04lpOYjaw2WzUPZcB2WMPZet2u1cmZ7MZTSYTNWU+n9N4PJbp3GvXYPIE2ADG9Xqder2e+kTr9ZqazSa1222eA6FqtUoQwqHCuFgscgWQWC6XaTgcEiqKQ9poNOiegbNfwWq1olKppB6yW6cWVcDHbDarIuzuBBaLhWrqVvwy/6wCMnhLXMbR4wnvtX/F5VxdAzJoRH+2BUYItlotmk6nLGW4gX6/z+IAT9+CLwPPr8DprnZ2MIwaQBsV+DBKUEfnQ8EtFRdFneBDKWhCW8EVGbdUQfxESR6qKhaHBrSgCe3fbLTpPlS70M0AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;'
                        /> */}
                      </div>
                      <div className="input-group input-group-lg p-2 mb-3">
                        <i className="fa fa-lock input-group-text"></i>
                        <input
                          id="password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          autoComplete="false"
                          onChange={(e) => setEmail(e.target.value)}
                          style={{backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmJJREFUWAntV7uKIkEUvbYGM4KID3wEIgjKRLLpKGLgFwiCfslGhkb7IbLgAzE1GhMxWxRRBEEwmEgDERWfW6fXuttq60a2wU6B1qlzb9U5fatsKROJVigUArvd7oeAyePx6Af3qGYymT7F2h8Wi+V7Pp+fmE7iv4Sw81GieusKIzNh4puCJzdaHIagCW1F4KSeQ4O4pPLoPb/3INBGBZ7avgz8fxWIxWIUCoX43Blegbe3NwoGg88zwMoncFUB8Yokj8dDdrv9MpfHVquV/H4/iVcpc1qgKAp5vV6y2WxaWhefreB0OimXy6kGkD0YDKhSqdB2u+XJqVSK4vE4QWS5XKrx0WjEcZ/PR9lslhwOh8p1Oh2q1Wp0OBw4RwvOKpBOp1kcSdivZPLvmxrjRCKhiiOOSmQyGXp5ecFQbRhLcRDRaJTe39//BHW+2cDr6ysFAoGrlEgkwpwWS1I7z+VykdvtliHuw+Ew40vABvb7Pf6hLuMk/rGY02ImBZC8dqv04lpOYjaw2WzUPZcB2WMPZet2u1cmZ7MZTSYTNWU+n9N4PJbp3GvXYPIE2ADG9Xqder2e+kTr9ZqazSa1222eA6FqtUoQwqHCuFgscgWQWC6XaTgcEiqKQ9poNOiegbNfwWq1olKppB6yW6cWVcDHbDarIuzuBBaLhWrqVvwy/6wCMnhLXMbR4wnvtX/F5VxdAzJoRH+2BUYItlotmk6nLGW4gX6/z+IAT9+CLwPPr8DprnZ2MIwaQBsV+DBKUEfnQ8EtFRdFneBDKWhCW8EVGbdUQfxESR6qKhaHBrSgCe3fbLTpPlS70M0AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto`}}
                        />
                      </div>
                      {/* <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          id="remember"
                        />
                        <label className="form-check-label" for="remember">
                          
                          Keep me logged in
                        </label>
                      </div> */}
                      <a
                        href="https://biztweak.org.za/public/password/reset"
                        className="d-block float-none float-md-end text-muted"
                      >
                        Forgot your password ?
                      </a>
                      <div className="clearfix mb-3"></div>
                      <div className="d-md-flex justify-content-between mb-3 align-items-center">
                        <button className="btn btn-lg btn-info text-white">
                          Login
                        </button>
                        <div className="float-none float-md-end">
                          Don't have an Account?
                          <a href="https://biztweak.org.za/public/register">
                            Sign up
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
