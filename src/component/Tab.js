import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const Tab = ({ title, id, action }) => {
   const { activeTab } = useContext(TodoContext);

   return (
      <li
         id={id}
         className={`${activeTab === id ? "text-indigo-400" : ""}`}
         onClick={action}
      >
         {title}
      </li>
   );
};
export default Tab;
