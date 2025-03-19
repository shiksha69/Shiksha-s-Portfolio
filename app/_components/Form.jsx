"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAlert } from "../_context/AlertContext";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .notRequired()
    .test("is-valid-phone", "Phone number must be 10 digits", (value) => {
      if (!value) return true; // If empty, it's valid
      return /^[0-9]{10}$/.test(value); // Check if it's 10 digits
    }),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        showAlert(responseData.message, "success");
      } else {
        showAlert(responseData.message || "Failed to send message", "error");
      }
    } catch (error) {
      showAlert("Something went wrong.\n Please try again.", "error");
    }
    reset();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 flex flex-col gap-y-4"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Name<span className="text-red-600">*</span>
        </label>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img
              src="/images/user.svg"
              alt="User Icon"
              width={18}
              height={18}
            />
          </div>
          <input
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="John Doe"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Phone No
        </label>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img
              src="/images/phone.svg"
              alt="Phone Icon"
              width={18}
              height={18}
            />
          </div>
          <input
            type="text"
            id="phone"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="1234567890"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Email<span className="text-red-600">*</span>
        </label>
        <div className="relative mb-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img
              src="/images/mail.svg"
              alt="Mail Icon"
              width={18}
              height={18}
            />
          </div>
          <input
            type="text"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="johndoe@example.com"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          rows={4}
          placeholder="Your message here..."
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center gap-1 bg-blue-500 text-white py-1.5 px-4 rounded-lg hover:bg-blue-600 transition-opacity"
      >
        {loading ? (
          <>
            <img
              src="/images/loading.svg"
              alt="Send"
              width={20}
              height={20}
              property="image"
              className="animate-spin"
            />
          </>
        ) : (
          <>
            Send
            <img
              src="/images/send.svg"
              alt="Send"
              width={20}
              height={20}
              property="image"
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
