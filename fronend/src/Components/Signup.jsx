import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
   <div className="flex items-center justify-center h-screen min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
             <div className="">
               <form method="dialog">
                 {/* if there is a button in form, it will close the modal */}
                 <Link to ={"/"} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                   ✕
                 </Link>
               </form>
               
               {/* input text */}
               <h3 className="text-lg font-bold">Create an Account</h3>
                {/* Name   */}
               <div className="mt-4 space-y-2">
                 <span>Name</span>
                 <br />
                 <input type="text"
                 placeholder="Enter your FullName" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                 />
               </div>
               {/* Emali   */}
               <div className="mt-4 space-y-2">
                 <span>Email</span>
                 <br />
                 <input type="email"
                 placeholder="Enter your email" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                 />
               </div>
               {/* password */}
                <div className="mt-4 space-y-2">
                 <span>Password</span>
                 <br />
                 <input type="text"
                 placeholder="Enter your email" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                 />
               </div>
               {/* button */}
               <div className="flex justify-around mt-4">
                  <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">SignUp</button>
                  <p>
                   
                     Have account?{" "} 
                     <button  className="text-blue-500 underline cursor-pointer"
                     onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                     }>
                     Login
                     </button>{" "}
                     <Login/>
                  </p>
               </div>
             </div>
           </div>
   </div>
  );
};

export default Signup;
