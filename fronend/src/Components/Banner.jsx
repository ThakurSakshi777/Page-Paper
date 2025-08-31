import React from "react";
import banner from "../../public/banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 gap-10">
        {/* left contianer */}
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold mb-4">
              Hello, Welcome here to learn Something{" "}
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className="text-x1">
              {" "}
              Welcome to our bookstore, a place where stories come alive. From
              timeless classics to the latest releases, we bring you books that
              inspire, entertain, and stay with you forever. Whether you’re
              searching for knowledge, adventure, or comfort, your next favorite
              read is just a click away.
            </p>

            {/* Email input */}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          {/* button */}
          <button className="btn mt-9 btn-dash btn-secondary">Secondary</button>
        </div>

        {/* right Contianer */}
        <div className=" order-1 w-full md:w-1/2 mt-12 md:mt-32 ml-12">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
