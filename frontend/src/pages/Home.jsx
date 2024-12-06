import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover  bg-[url(https://images.unsplash.com/photo-1569542609987-2c0e108c8bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3Dk)] h-screen pt-8  flex justify-between flex-col w-full ">
        <img
          className="w-16 ml-8"
          src="/src/assets/uberLogo.png"
          alt="uber logo"
        />
        <div className="bg-white py-5 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
