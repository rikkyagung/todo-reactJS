import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder, icon }) => {
   return (
      <input
         type="text"
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className={`${
            icon ? "pl-10" : "pl-3"
         } w-full rounded-md py-3 text-[.95rem] outline-1 outline-palatinate-blue focus:outline-offset-0`}
      />
   );
};
export default Input;

Input.propTypes = {
   placeholder: PropTypes.string.isRequired,
};
