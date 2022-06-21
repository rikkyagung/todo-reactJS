import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
   const [input, setInput] = useState("");
   const [todoIndex, setTodoIndex] = useState(null);
   const [modal, setModal] = useState(false);
   const [todoItem, setTodoItem] = useState([]);
   const [activeTab, setActiveTab] = useState("all");

   const onUpdateTab = (e) => {
      const target = e.target.id;
      setActiveTab(target);
   };

   const onChange = (e) => {
      const target = e.target.value;
      setInput(target);
   };

   const onSubmit = (e) => {
      e.preventDefault();

      if (todoIndex === null) {
         setTodoItem([...todoItem, { name: input, completed: false }]);
      } else {
         todoItem[todoIndex].name = input;
      }

      setInput("");
      setTodoIndex(null);
   };

   const onDelete = (e) => {
      const target = parseInt(e.currentTarget.value);
      const todoTarget = todoItem[target];
      const todoFiltered = todoItem.filter((e) => {
         return e !== todoTarget;
      });
      setTodoItem(todoFiltered);
   };

   const onUpdate = (e) => {
      openModal();
      const target = e.currentTarget.value;
      const todoTarget = todoItem[target].name;
      setInput(todoTarget);
      setTodoIndex(target);
   };

   const onComplete = (e) => {
      const target = e.currentTarget.value;

      const newTodoItems = [...todoItem];
      newTodoItems[target].completed === false
         ? (newTodoItems[target].completed = true)
         : (newTodoItems[target].completed = false);
      setTodoItem(newTodoItems);
   };

   const clearAll = () => {
      const todoList = [...todoItem];
      todoList.length = 0;
      setTodoItem(todoList);
   };

   const openModal = () => {
      setModal(true);
   };

   const closeModal = () => {
      setModal(false);
   };

   const functions = {
      onChange,
      onSubmit,
      onDelete,
      onUpdate,
      onComplete,
      clearAll,
      openModal,
      closeModal,
      onUpdateTab,
   };

   return (
      <TodoContext.Provider
         value={{
            input,
            setInput,
            todoIndex,
            setTodoIndex,
            todoItem,
            setTodoItem,
            modal,
            setModal,
            activeTab,
            setActiveTab,
            functions,
         }}
      >
         {props.children}
      </TodoContext.Provider>
   );
};
