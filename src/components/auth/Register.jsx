import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) navigate("/dashboard");
  }, [navigate]);

  const registerWithEmailAndPassword = (firstName, lastName,email, password) => {

  }

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center bg-[#e5e5e5]">
       <h3
        className="text-center m-4 text-3xl text-black font-bold"
        id="pageHeader"
      >
        Register
      </h3>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-[25%]">
      <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            autoComplete="false"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
             text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            autoComplete="false"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

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
            autoComplete="false"
            placeholder="Email"
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
            autoComplete="false"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>

        <div className="items-center justify-between">
          <button
            className="hover:bg-[#f7e08c] w-[100%] bg-[#ffd740] text-black font-bold 
            py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => registerWithEmailAndPassword(firstName, lastName,email, password)}
          >
            Register
          </button>
          <br></br>
          <br></br>
          <div className="font-bold text-sm text-black hover:text-[#ffd740]">
            <Link to="/auth/login">Already have an account? Login now.</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
