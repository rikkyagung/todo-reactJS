import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import Button from "./Button";
import Input from "./Input";

const Modal = () => {
   const { input, functions } = useContext(TodoContext);
   const { onSubmit, closeModal } = functions;

   return (
      <section className="absolute left-0 top-0 w-96 bg-Bright-Gray p-5">
         <div className="relative mb-5">
            <button
               className="absolute -top-9 -right-8 flex h-9 w-9 items-center justify-center rounded-full bg-slate-400"
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
               <div className="absolute top-10 left-1/2 mt-5 flex -translate-x-1/2 justify-center">
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
