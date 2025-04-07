"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/users/addUser", data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">Add New User</h2>
        {message && <p className="text-center text-green-600">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.name &&
              errors.name?.message(
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
              })}
              className="w-full p-2 border rounded"
            />
            {errors.email &&
              errors.email?.message(
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: 6,
              })}
              className="w-full p-2 border rounded"
            />
            {errors.password &&
              errors.password?.message(
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
