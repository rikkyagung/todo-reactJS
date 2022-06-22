import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const Tab = ({ title, id, action }) => {
   const { activeTab } = useContext(TodoContext);

   return (
      <li
         id={id}
         className={`${
            activeTab === id
               ? "font-bold text-palatinate-blue before:absolute before:left-[42%] before:-bottom-4 before:block before:h-[7px] before:w-[7px] before:rounded-full before:bg-palatinate-blue"
               : "dark:text-ghost-white opacity-75"
         } relative cursor-pointer`}
         onClick={action}
      >
         {title}
      </li>
   );
};
export default Tab;
