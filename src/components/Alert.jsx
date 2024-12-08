import { useEffect } from "react";
import duck from '/RubberDucky.svg'

export default function Alert({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onClose();
      }, 2000); // Automatically hide the alert after 2 seconds
      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  return (
    <div
      className={`fixed top-16 right-0 transform ${
        visible ? "translate-x-[-16px]" : "translate-x-full"
      } transition-transform duration-500 ease-in-out bg-gray-800 text-white px-2 py-2 shadow-lg z-50
        rounded-xl flex items-center gap-3
      `}
    >
      <img src={duck} alt="Rubber Ducky" className="size-5" />  
      <p>{message}</p>
    </div>
  );
}
