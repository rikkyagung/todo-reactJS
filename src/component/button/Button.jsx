import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, action, status, disabled }) => {
   return (
      <button
         onClick={action}
         disabled={disabled}
         className={`${
            status === "primary"
               ? "border-[1px] border-palatinate-blue bg-palatinate-blue text-white shadow-lg shadow-palatinate-blue/50"
               : "border-[1px] border-palatinate-blue bg-transparent text-palatinate-blue transition-all duration-200 ease-linear hover:bg-palatinate-blue hover:text-white"
         } flex w-auto items-center justify-center text-[.95rem] rounded-full px-5 py-[9px] disabled:cursor-not-allowed disabled:opacity-50`}
      >
         {title}
      </button>
   );
};

Button.propTypes = {
   title: PropTypes.string.isRequired,
   status: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

export default Button;
