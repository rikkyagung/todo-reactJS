import React, { createContext, useReducer, useState } from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_ALL } from "./TodoTypes";

export const ContextReducer = createContext();

export const ContextReducerProvider = (props) => {
   const [inputTodo, setInputTodo] = useState("");
   const [todoIndex, setTodoIndex] = useState(null);
   const [todoItem, setTodoItem] = useState([]);
   const [modal, setModal] = useState(false);
   const [activeTab, setActiveTab] = useState("all");
   const [search, setSearch] = useState("");

   const todoReducer = (state, action) => {
      switch (action.type) {
         case ADD_TODO:
            if (action.index === null) {
               return [...state, { name: action.name, completed: false }];
            } else {
               return state.map((todo, idx) => {
                  if (idx === action.index) {
                     return { ...todo, name: action.name };
                  }
                  return todo;
               });
            }
         case DELETE_TODO:
            let target = state[action.index];
            return state.filter((event) => event !== target);
         case TOGGLE_TODO:
            return state.map((todo, index) => {
               if (index === action.index) {
                  return { ...todo, completed: !todo.completed };
               }
               return todo;
            });
         case CLEAR_ALL:
            return (state = []);
         default:
            return state;
      }
   };

   /**
    * Reducer mempunyai 2 parameter, yang pertama itu reducer yang sebagai function untuk mendapatkan nilai state yang baru
    * lalu yang kedua sebagai initial value
    * untuk return value berisi 2, yang pertama ada state yang mengambil nilai dari initial value
    * value ke 2, berisi function dispatch, yang kita panggil untuk mengupdate state
    */
   const [state, dispatch] = useReducer(todoReducer, todoItem);

   const onChange = (e) => {
      const target = e.target.value;
      setInputTodo(target);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      dispatch({ type: ADD_TODO, name: inputTodo, index: todoIndex });
      setInputTodo("");
      setTodoIndex(null);
   };

   const onUpdate = (e) => {
      openModal();
      const target = parseInt(e.currentTarget.value);
      const todoTarget = state[target].name;
      setInputTodo(todoTarget);
      setTodoIndex(target);
   };

   const onUpdateTab = (e) => {
      const target = e.target.id;
      setActiveTab(target);
   };

   const searchItem = (e) => {
      setSearch(e.target.value);
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
      onUpdate,
      onUpdateTab,
      openModal,
      closeModal,
      searchItem
   };

   return (
      <ContextReducer.Provider
         value={{
            inputTodo,
            setInputTodo,
            todoIndex,
            setTodoIndex,
            todoItem,
            setTodoItem,
            activeTab,
            setActiveTab,
            modal,
            setModal,
            state,
            dispatch,
            search,
            setSearch,
            functions,
         }}
      >
         {props.children}
      </ContextReducer.Provider>
   );
};
