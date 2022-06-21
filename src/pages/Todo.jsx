import React, { useContext } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import Modal from "../component/Modal";
import Tab from "../component/Tab";
import TabContent from "../component/TabContent";
import { TodoContext } from "../context/todoContext";

const Todo = () => {
   const { todoItem, activeTab, modal, functions } = useContext(TodoContext);
   const { openModal, onUpdateTab, clearAll } = functions;

   return (
      <main className="mx-auto w-96 pt-5 pb-10 font-roboto">
         <section className="rounded-tr-md rounded-tl-md bg-slate-400 py-4 text-center text-2xl font-bold tracking-wide text-Bright-Gray">
            <h1>Todo List</h1>
         </section>

         <section className="relative bg-Bright-Gray p-5 shadow-lg">
            <section className="flex flex-col gap-5">
               <div className="flex items-center justify-between gap-2">
                  <div className="flex-1">
                     {todoItem.length === 0 ? (
                        <p>You don't have any task here</p>
                     ) : (
                        <p>
                           You have {todoItem.length} total todo
                           {todoItem.length > 1 ? "s" : ""}
                        </p>
                     )}
                     {/* <TabContent id="all" activeTab={activeTab}>
                        {todoItem.length === 0 ? (
                           <p>You don't have any task here</p>
                        ) : (
                           <p>
                              You have {todoItem.length} total todo
                              {todoItem.length > 1 ? "s" : ""}
                           </p>
                        )}
                     </TabContent>
                     <TabContent id="ongoing" activeTab={activeTab}>
                        {todoItem
                           .filter((todo) => todo.completed === false)
                           .map((todo, index, arr) => {
                              return (
                                 <>
                                    {arr.length === undefined ? (
                                       <span>You dont have task here</span>
                                    ) : (
                                       <span>you have {arr.length}</span>
                                    )}
                                 </>
                              );
                           })}
                     </TabContent>
                     <TabContent id="completed" activeTab={activeTab}>
                        {todoItem
                           .filter((todo) => todo.completed === false)
                           .map((todo) => {
                              return (
                                 <p>
                                    You have {todo.length} on going todo
                                    {todoItem.length > 1 ? "s" : ""}
                                 </p>
                              );
                           })}
                     </TabContent> */}
                  </div>
                  <Button
                     title="Clear All"
                     action={clearAll}
                     status="secondary"
                     disabled={todoItem.length === 0 ? true : false}
                  />
               </div>
               <ul className="flex justify-between">
                  <Tab id="all" title="All" action={onUpdateTab} />
                  <Tab id="ongoing" title="On Going" action={onUpdateTab} />
                  <Tab id="completed" title="Completed" action={onUpdateTab} />
               </ul>
            </section>

            <section className="mt-5">
               <ul className="flex flex-col">
                  <TabContent id="all" activeTab={activeTab}>
                     {todoItem.map((todo, index) => {
                        return todo.name === "" ? null : (
                           <li
                              key={index}
                              className="mb-5 rounded-md bg-white px-5 py-5"
                           >
                              <Card
                                 title={todo.name}
                                 value={index}
                                 complete={todo.completed}
                              />
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
                                 className="mb-5 rounded-md bg-white px-5 py-5"
                              >
                                 <Card
                                    title={todo.name}
                                    value={index}
                                    complete={todo.completed}
                                 />
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
                                 className="mb-5 rounded-md bg-white px-5 py-5"
                              >
                                 <Card
                                    title={todo.name}
                                    value={index}
                                    complete={todo.completed}
                                 />
                              </li>
                           );
                        })}
                  </TabContent>
               </ul>

               <div className="absolute left-1/2 flex -translate-x-1/2 justify-center">
                  <Button
                     title="+ New Task"
                     action={openModal}
                     status="primary"
                  />
               </div>
            </section>

            {modal ? <Modal /> : null}
         </section>
      </main>
   );
};
export default Todo;
