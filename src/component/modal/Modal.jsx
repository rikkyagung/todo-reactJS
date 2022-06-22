import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Input, Button } from "../index";

const Modal = () => {
   const { input, functions } = useContext(TodoContext);
   const { onSubmit, closeModal } = functions;

   return (
      <section className="absolute left-1/2 top-0 w-full -translate-x-1/2 rounded-3xl border bg-ghost-white px-5 pt-5 pb-6 shadow-md dark:bg-maastrich-blue">
         <div className="relative mb-5">
            <button
               className="absolute -top-9 -right-8 flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-palatinate-blue bg-ghost-white text-palatinate-blue transition-all duration-200 ease-linear hover:bg-palatinate-blue hover:text-white"
               onClick={closeModal}
            >
               <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
            <form method="post" onSubmit={onSubmit} className="text-center">
               <Input />
               <div className="absolute top-10 left-1/2 mt-5 flex translate-y-3 -translate-x-1/2 justify-center">
                  <Button
                     title="Submit"
                     status="primary"
                     disabled={input === "" ? true : false}
                  />
               </div>
            </form>
         </div>
      </section>
   );
};
export default Modal;
