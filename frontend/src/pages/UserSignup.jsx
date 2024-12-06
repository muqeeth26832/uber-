import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
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
          className="w-16 mb-10"
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
          <h3 className="text-lg font-medium mb-2 ">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee]  rounded px-4 w-1/2 py-2 border text-lg placeholder:text-base "
              type="text"
              required
              placeholder="first name"
              name=""
              id=""
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              className="bg-[#eeeeee]  rounded px-4 w-1/2 py-2 border text-lg placeholder:text-base "
              type="text"
              required
              placeholder="last name"
              name=""
              id=""
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2 ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 w-full py-2 border text-lg placeholder:text-base "
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
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full border text-lg placeholder:text-base "
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
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-xs">
          By proceeding you consent to get calls, WhatsApp or SMS messages from
          Uber.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
