import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const Card = ({ title, value }) => {
   const { functions } = useContext(TodoContext);
   const { onDelete, onUpdate, onComplete } = functions;

   return (
      <div className="flex flex-col gap-5">
         <div>
            <p className="text-lg leading-relaxed">{title}</p>
         </div>
         <div className="flex items-center gap-3">
            <button
               value={value}
               onClick={onComplete}
               className="flex h-9 w-9 items-center justify-center rounded-full bg-ghost-white text-palatinate-blue shadow-md transition-all duration-200 ease-linear hover:bg-palatinate-blue hover:text-white disabled:cursor-not-allowed"
            >
               <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
            <button
               value={value}
               onClick={onUpdate}
               className="flex h-9 w-9 items-center justify-center rounded-full bg-ghost-white text-palatinate-blue shadow-md transition-all duration-200 ease-linear hover:bg-palatinate-blue hover:text-white disabled:cursor-not-allowed"
            >
               <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
               </svg>
            </button>
            <button
               className="flex h-9 w-9 items-center justify-center rounded-full bg-ghost-white text-palatinate-blue shadow-md transition-all duration-200 ease-linear hover:bg-palatinate-blue hover:text-white"
               value={value}
               onClick={onDelete}
            >
               <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
};
export default Card;
