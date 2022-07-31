import React, { useContext } from "react";
import { Button, Card, Input, Modal, Tab, TabContent } from "../component";
import { ThemeContext } from "../context/ThemeContext";
import { ContextReducer } from "../context/ContextReducer";
import { CLEAR_ALL } from "../data/TodoTypes";

export default function Reducer() {
   const { themeValue, setTheme } = useContext(ThemeContext);
   const {
      state,
      dispatch,
      isModal,
      activeTab,
      search,
      setSearch,
      sort,
      functions,
   } = useContext(ContextReducer);
   const { onUpdateTab, searchItem, showModal, sorting } = functions;

   const completedTodo = state.filter((todo) => todo.completed);
   const uncompleteTodo = state.filter((todo) => !todo.completed);

   return (
      <main className="flex items-center justify-center px-6 pt-10 pb-12 font-roboto">
         <div className="relative w-96 rounded-3xl bg-ghost-white pt-5 pb-8 shadow-lg transition-all duration-200 ease-linear dark:bg-maastrich-blue">
            <button
               className="absolute right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 ease-linear"
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

            <header className="mb-5 mt-9 px-6 text-center text-[34px] font-bold dark:text-ghost-white">
               <h1>Todo List</h1>
            </header>

            <div className="flex-end relative flex py-8 px-6">
               <Input
                  value={search}
                  onChange={searchItem}
                  placeholder={"Search todo"}
                  icon={true}
               />
               <svg
                  className="absolute top-[2.8rem] left-8 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fillRule="evenodd"
                     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                     clipRule="evenodd"
                  />
               </svg>
               {search.length === 0 ? null : (
                  <svg
                     className="absolute right-8 top-[2.8rem] h-5 w-5 cursor-pointer"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                     onClick={() => {
                        setSearch("");
                     }}
                  >
                     <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
               )}
            </div>

            <section className="relative mb-5 flex flex-col gap-10 px-6">
               <ul className="flex justify-around">
                  <Tab id="all" title="All" action={onUpdateTab} />
                  <Tab id="ongoing" title="On Going" action={onUpdateTab} />
                  <Tab id="completed" title="Completed" action={onUpdateTab} />
               </ul>
               <div className="flex items-center justify-between gap-3">
                  <div className="flex-1 dark:text-ghost-white">
                     <TabContent id="all" activeTab={activeTab}>
                        {state.length === 0 ? (
                           <p>You don't have any todo here</p>
                        ) : (
                           <p>
                              You have {state.length} total todo
                              {state.length > 1 ? "s" : ""}
                           </p>
                        )}
                     </TabContent>
                     <TabContent id="ongoing" activeTab={activeTab}>
                        {uncompleteTodo.length === 0 ? (
                           <p>You don't have any todo here</p>
                        ) : (
                           <p>
                              You have {uncompleteTodo.length} on going todo
                              {uncompleteTodo.length > 1 ? "s" : ""}
                           </p>
                        )}
                     </TabContent>
                     <TabContent id="completed" activeTab={activeTab}>
                        {completedTodo.length === 0 ? (
                           <p>You don't have any todo here</p>
                        ) : (
                           <p>
                              You have {completedTodo.length} completed todo
                              {completedTodo.length > 1 ? "s" : ""}
                           </p>
                        )}
                     </TabContent>
                  </div>
                  <Button
                     title="Clear All"
                     action={() => dispatch({ type: CLEAR_ALL })}
                     status="secondary"
                     disabled={state.length === 0 ? true : false}
                  />
               </div>
               {isModal ? <Modal /> : null}
            </section>

            <div className="mb-3 flex justify-end px-6">
               {state.length === 0 ? null : sort ? (
                  <svg
                     className="h-6 w-6 cursor-pointer dark:text-white"
                     onClick={sorting}
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                  </svg>
               ) : (
                  <svg
                     className="h-6 w-6 cursor-pointer dark:text-white"
                     onClick={sorting}
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
               )}
            </div>

            <section className="scrolling-body mt-5 max-h-[13rem] overflow-y-scroll px-6">
               <ul className="flex flex-col">
                  <TabContent id="all" activeTab={activeTab}>
                     {[...state]
                        .reverse()
                        .filter((data) =>
                           Object.values(data)
                              .join(" ")
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((todo, index) => {
                           return (
                              <li
                                 key={index}
                                 className={`mb-3 rounded-3xl px-5 py-5 shadow-sm transition-all duration-150 ease-linear ${
                                    todo.completed ? "bg-turquoise" : "bg-white"
                                 }`}
                              >
                                 <Card
                                    title={todo.name}
                                    value={todo.id}
                                    info={todo.date}
                                 />
                              </li>
                           );
                        })}
                  </TabContent>
                  <TabContent id="ongoing" activeTab={activeTab}>
                     {uncompleteTodo
                        .filter((data) =>
                           Object.values(data)
                              .join(" ")
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((todo, index) => {
                           return (
                              <li
                                 key={index}
                                 className={`mb-3 rounded-3xl px-5 py-5 shadow-sm transition-all duration-150 ease-linear ${
                                    todo.completed ? "bg-turquoise" : "bg-white"
                                 }`}
                              >
                                 <Card
                                    title={todo.name}
                                    value={todo.id}
                                    info={todo.date}
                                 />
                              </li>
                           );
                        })}
                  </TabContent>
                  <TabContent id="completed" activeTab={activeTab}>
                     {completedTodo
                        .filter((data) =>
                           Object.values(data)
                              .join(" ")
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((todo, index) => {
                           return (
                              <li
                                 key={index}
                                 className={`mb-3 rounded-3xl px-5 py-5 shadow-sm transition-all duration-150 ease-linear ${
                                    todo.completed ? "bg-turquoise" : "bg-white"
                                 }`}
                              >
                                 <Card
                                    title={todo.name}
                                    value={todo.id}
                                    info={todo.date}
                                 />
                              </li>
                           );
                        })}
                  </TabContent>
               </ul>
            </section>

            <div className="absolute left-1/2 flex -translate-x-1/2 translate-y-3 justify-center">
               <Button
                  title="+ New Task"
                  action={showModal}
                  status="primary"
                  disabled={isModal ? true : false}
               />
            </div>
         </div>
      </main>
   );
}
