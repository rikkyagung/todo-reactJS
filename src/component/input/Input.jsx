import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const Input = () => {
   const { input, functions } = useContext(TodoContext);
   const { onChange } = functions;

   return (
      <input
         type="text"
         value={input}
         onChange={onChange}
         placeholder="Add a new task"
         className="w-full rounded-md p-3 outline-1 outline-palatinate-blue focus:outline-offset-0"
      />
   );
};
export default Input;
