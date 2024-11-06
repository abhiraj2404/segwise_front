import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:7001/api/v1/user/login",
      { username, password }, // The data you are sending in the request body
      {
        headers: {
          "Content-Type": "application/json", // Specify that the request body is in JSON format
        },
        withCredentials: true, // This ensures that cookies are included in the request
      }
    );

    // Handle response data
    console.log(response.data);

    // To check cookies after the request:
    console.log("cookies - ", document.cookie);

    navigate("/");
  };

  return (
    <div className="h-[80vh] mt-24">
      <h1 className="text-3xl text-white py-10 font-bold">Login</h1>
      <form className="max-w-sm mx-auto ">
        <div className="mb-5">
          <label
            htmlFor="Username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Username
          </label>
          <input
            onChange={(e) => setusername(e.target.value)}
            type="text"
            id="Username"
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your password
          </label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            className="border text-white     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 :text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          onClick={handlerSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
