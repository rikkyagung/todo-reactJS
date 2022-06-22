import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import { Button, Card, Modal, Tab, TabContent } from "../component/index";

const Todo = () => {
   const { themeValue, setTheme } = useContext(ThemeContext);
   const { todoItem, activeTab, modal, functions } = useContext(TodoContext);
   const { openModal, onUpdateTab, clearAll } = functions;

   return (
      <main className="flex h-screen items-center justify-center overflow-hidden px-5 font-roboto">
         <div className="relative rounded-3xl bg-ghost-white pt-5 pb-8 shadow-lg transition-all duration-200 ease-linear dark:bg-maastrich-blue">
            <button
               className="absolute right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 ease-linear"
               onClick={() => {
                  setTheme(themeValue);
               }}
            >
               {themeValue === "light" ? (
                  <svg
                     className="h-6 w-6 cursor-pointer"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
               ) : (
                  <svg
                     className="h-6 w-6 cursor-pointer"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                     />
                  </svg>
               )}
            </button>

            <header className="mb-10 py-8 text-center text-[34px] font-bold dark:text-ghost-white">
               <h1>Todo List</h1>
            </header>

            <section className="relative mb-5 flex flex-col gap-10 px-6">
               <ul className="flex justify-around">
                  <Tab id="all" title="All" action={onUpdateTab} />
                  <Tab id="ongoing" title="On Going" action={onUpdateTab} />
                  <Tab id="completed" title="Completed" action={onUpdateTab} />
               </ul>
               <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 dark:text-ghost-white">
                     {todoItem.length === 0 ? (
                        <p>You don't have any task here</p>
                     ) : (
                        <p>
                           You have {todoItem.length} total task
                           {todoItem.length > 1 ? "s" : ""}
                        </p>
                     )}
                  </div>
                  <Button
                     title="Clear All"
                     action={clearAll}
                     status="secondary"
                     disabled={todoItem.length === 0 ? true : false}
                  />
               </div>

               {modal ? <Modal /> : null}
            </section>

            <section className="scrolling-body mt-5 max-h-[14rem] overflow-y-scroll px-6 ">
               <ul className="flex flex-col">
                  <TabContent id="all" activeTab={activeTab}>
                     {todoItem.map((todo, index) => {
                        return (
                           <li
                              key={index}
                              className={`mb-3 rounded-3xl px-5 py-5 shadow-sm transition-all duration-150 ease-linear ${
                                 todo.completed ? "bg-turquoise" : "bg-white"
                              }`}
                           >
                              <Card title={todo.name} value={index} />
                           </li>
                        );
                     })}
                  </TabContent>
                  <TabContent id="ongoing" activeTab={activeTab}>
                     {todoItem
                        .filter((todo) => todo.completed === false)
                        .map((todo, index) => {
                           return (
                              <li
                                 key={index}
                                 className="mb-3 rounded-3xl bg-white px-5 py-5 shadow-sm"
                              >
                                 <Card title={todo.name} value={index} />
                              </li>
                           );
                        })}
                  </TabContent>
                  <TabContent id="completed" activeTab={activeTab}>
                     {todoItem
                        .filter((todo) => todo.completed === true)
                        .map((todo, index) => {
                           return (
                              <li
                                 key={index}
                                 className="mb-3 rounded-3xl bg-turquoise px-5 py-5 shadow-sm"
                              >
                                 <Card title={todo.name} value={index} />
                              </li>
                           );
                        })}
                  </TabContent>
               </ul>
            </section>

            <div className="absolute left-1/2 flex -translate-x-1/2 translate-y-3 justify-center">
               <Button title="+ New Task" action={openModal} status="primary" />
            </div>
         </div>
      </main>
   );
};
export default Todo;
