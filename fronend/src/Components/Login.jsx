import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>
          
          {/* input text */}
          <h3 className="text-lg font-bold">Login</h3>
          {/* Emali   */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="text"
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
             <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">Login</button>
             <p>
                Not Registered? <a href="" className="text-blue-500 underline cursor-pointer">SingUp</a>
             </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
