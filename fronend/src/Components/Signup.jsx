import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit =  async (data) => {
      const userInfo ={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      };
     await axios.post("http://localhost:4001/user/signup" , userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success(" Signup Successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err) =>{
        if(err.response){
            toast.error("Error:" + err.response.data.message);
        console.log(err)
        }
      })
    };
    
  return (
   <div className="flex items-center justify-center h-screen min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
             <div className="">
              
                {/*  "handleSubmit" will validate your inputs before invoking "onSubmit" */}
               <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                 {/*  close the modal */}
                 <Link to ={"/"} className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                   ✕
                 </Link>
              
               
               {/* input text */}
               <h3 className="text-lg font-bold">Create an Account</h3>
                {/* Name   */}
               <div className="mt-4 space-y-2">
                 <span>Name</span>
                 <br />

                 {/* input name */}
                 <input type="text"
                 placeholder="Enter your FullName" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                  // {/*  validation with required*/}
                {...register("fullname", { required: true })}
                 />
                 {/*  validation fails  */}
                 <br />
              {errors.fullname && (
                <span className="text-red-500">This field is required</span>
                  )}
               </div>
               
               
               {/* Emali   */}
               <div className="mt-4 space-y-2">
                 <span>Email</span>
                 <br />
                 <input type="email"
                 placeholder="Enter your email" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                   // {/*  validation with required*/}
                {...register("email", { required: true })}
                 />
                      {/*  validation fails  */}
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
               </div>

               
               {/* password */}
                <div className="mt-4 space-y-2">
                 <span>Password</span>
                 <br />
                 <input type="text"
                 placeholder="Enter your email" 
                 className="px-8 py-2 border rounded outline-none w-80-md"
                  // {/*  validation with required*/}
                {...register("password", { required: true })}
                 />
                   {/*  validation fails  */}
              <br />
              {errors.password && <span className="text-red-500">This field is required</span>}
               </div>

               
               {/* button */}
               <div className="flex justify-around mt-4">
                  <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">SignUp</button>
                  <p>

                    
                   {/* Login */}
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
                </form>
             </div>
           </div>
   </div>
  );
};

export default Signup;
