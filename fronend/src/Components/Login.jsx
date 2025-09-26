import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success(" Login Successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error:" + err.response.data.message);
          console.log(err);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/*  "handleSubmit" will validate  */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/*  close the modal */}
            <button
              type="button"
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            {/* input text */}
            <h3 className="text-lg font-bold">Login</h3>
            {/* Emali   */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="px-8 py-2 border rounded outline-none w-80-md"
                // {/*  validation with required*/}
                {...register("email", { required: true })}
              />
              {/*  validation fails  */}
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="px-8 py-2 border rounded outline-none w-80-md"
                // {/*  validation with required*/}
                {...register("password", { required: true })}
              />
              {/*  validation fails  */}
              <br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                Login
              </button>
              <p>
                Not Registered?
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
