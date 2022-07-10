import React from "react";
import { useContext } from "react";
import { ContextReducer } from "../../context/ContextReducer";

const Tab = ({ title, id, action }) => {
   const { activeTab } = useContext(ContextReducer);

   return (
      <li
         id={id}
         className={`${
            activeTab === id
               ? "font-bold text-palatinate-blue before:absolute before:left-[42%] before:-bottom-4 before:block before:h-[7px] before:w-[7px] before:rounded-full before:bg-palatinate-blue"
               : "opacity-75 dark:text-ghost-white"
         } relative cursor-pointer`}
         onClick={action}
      >
         {title}
      </li>
   );
};
export default Tab;
