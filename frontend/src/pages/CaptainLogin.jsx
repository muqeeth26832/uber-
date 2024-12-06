import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setcaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div
        className="
      "
      >
        <img
          className="w-16 mb-10 bg-yellow-200 rounded p-1"
          src="/src/assets/uberLogo.png"
          alt="uber logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className=""
        >
          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full py-2 border text-lg placeholder:text-base "
            type="email"
            required
            placeholder="email@example.com"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full border text-lg placeholder:text-base "
            type="password"
            placeholder="password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="block bg-[#111] text-white w-full font-semibold mb-2 rounded px-4 py-2  text-lg placeholder:text-base  ">
            Login
          </button>
          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className=" flex items-center justify-center bg-[#d5622d] text-white w-full font-semibold mb-7 rounded px-4 py-2  text-lg placeholder:text-base  "
        >
          Signin as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
