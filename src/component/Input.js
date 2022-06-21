import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const Input = () => {
   const { input, functions } = useContext(TodoContext);
   const { onChange } = functions;

   return (
      <input
         type="text"
         value={input}
         onChange={onChange}
         placeholder="Add a new task"
         className="w-full p-2"
      />
   );
};
export default Input;
