"use client";

import { useAlert } from "../_context/AlertContext";

const alertStyles = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  info: "bg-blue-100 border-blue-500 text-blue-700",
};

export default function Alert() {
  const { alert, hideAlert } = useAlert();

  if (!alert.visible) return null;

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4 border-l-4 rounded shadow-lg ${
        alertStyles[alert.type] || alertStyles.info
      }`}
    >
      <div className="flex justify-between items-center">
        <span>{alert.message}</span>
        <button className="text-lg font-bold ml-4" onClick={hideAlert}>
          &times;
        </button>
      </div>
    </div>
  );
}
