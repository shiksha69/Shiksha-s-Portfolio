"use client";
import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  const showAlert = (message, type = "info", duration = 5000) => {
    setAlert({ message, type, visible: true });

    if (duration > 0) {
      setTimeout(() => {
        hideAlert();
      }, duration);
    }
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, visible: false }));
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

// Custom hook to use the alert context
export function useAlert() {
  return useContext(AlertContext);
}
