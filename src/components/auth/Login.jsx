import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
        <h3
        className="text-center m-4 text-3xl text-black font-bold"
        id="pageHeader"
      >
        Login
      </h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-[25%]">
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
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
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
      </form>
    </div>
  );
};
