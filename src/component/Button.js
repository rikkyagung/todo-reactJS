import React from "react";

const Button = ({ title, action, status, disabled }) => {
   return (
      <button
         onClick={action}
         disabled={disabled}
         className={`${
            status === "primary" ? "bg-black text-white" : "bg-white"
         } flex w-auto items-center justify-center rounded-full px-5 py-[9px] disabled:cursor-not-allowed disabled:opacity-50`}
      >
         {title}
      </button>
   );
};
export default Button;
