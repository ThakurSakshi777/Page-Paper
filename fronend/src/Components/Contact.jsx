import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    alert("Thank you for contacting us! We will get back to you soon.");
    reset(); // clear form after submit
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-pink-600">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-blue-900">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded outline-none focus:ring focus:ring-pink-300"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-blue-900">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded outline-none focus:ring focus:ring-pink-300"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-blue-900">Message</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded outline-none resize-none focus:ring focus:ring-pink-300"
              rows="4"
              {...register("message", { required: true, minLength: 10 })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                Message must be at least 10 characters
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-pink-500 rounded-md hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
