import React, {
   createContext,
   useEffect,
   useReducer,
   useRef,
   useState,
} from "react";
import {
   ADD_TODO,
   DELETE_TODO,
   TOGGLE_TODO,
   CLEAR_ALL,
   REVERSE_DATA,
} from "../data/TodoTypes";

export const ContextReducer = createContext();

export const ContextReducerProvider = (props) => {
   const [inputTodo, setInputTodo] = useState("");
   const [todoIndex, setTodoIndex] = useState(null);
   const [isModal, setIsModal] = useState(false);
   const [activeTab, setActiveTab] = useState("all");
   const [search, setSearch] = useState("");
   const [sort, setSort] = useState(false);
   const id = useRef(0);

   const todoReducer = (state, action) => {
      switch (action.type) {
         case ADD_TODO:
            if (action.index === null) {
               return [
                  ...state,
                  {
                     id: action.id,
                     name: action.name,
                     date: "",
                     completed: false,
                  },
               ];
            } else {
               return state.map((todo) => {
                  if (todo.id === action.index) {
                     return {
                        ...todo,
                        name: action.name,
                        date:
                           new Date().toLocaleDateString() +
                           " " +
                           new Date().toLocaleTimeString("en-GB", {
                              hour: "numeric",
                              minute: "numeric",
                           }),
                     };
                  }
                  return todo;
               });
            }
         case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.index);
         case TOGGLE_TODO:
            return state.map((todo) => {
               if (todo.id === action.index) {
                  return { ...todo, completed: !todo.completed };
               }
               return todo;
            });
         case CLEAR_ALL:
            return (state = []);
         case REVERSE_DATA:
            return [...state].reverse();
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
   const [state, dispatch] = useReducer(todoReducer, []);

   useEffect(() => {
      id.current = id.current + 1;
   }, [state]);

   const onChange = (e) => {
      const target = e.target.value;
      setInputTodo(target);
   };

   const onSubmit = (e) => {
      e.preventDefault();
      dispatch({
         type: ADD_TODO,
         id: id.current,
         name: inputTodo,
         index: todoIndex,
      });
      setInputTodo("");
      setTodoIndex(null);
   };

   const onUpdate = (e) => {
      showModal();
      const target = parseInt(e.currentTarget.value);
      state.filter((todo) => {
         if (todo.id === target) {
            setInputTodo(todo.name);
         }
         return todo;
      });
      setTodoIndex(target);
   };

   const onUpdateTab = (e) => {
      const target = e.target.id;
      setActiveTab(target);
   };

   const searchItem = (e) => {
      setSearch(e.target.value);
   };

   const sorting = () => {
      dispatch({ type: REVERSE_DATA });
      setSort((prev) => !prev);
   };

   const showModal = () => {
      if (isModal === false) {
         setInputTodo("");
         setTodoIndex(null);
      }
      setIsModal((prev) => !prev);
   };

   const functions = {
      onChange,
      onSubmit,
      onUpdate,
      onUpdateTab,
      showModal,
      searchItem,
      sorting,
   };

   return (
      <ContextReducer.Provider
         value={{
            inputTodo,
            todoIndex,
            activeTab,
            isModal,
            state,
            dispatch,
            search,
            setSearch,
            sort,
            functions,
         }}
      >
         {props.children}
      </ContextReducer.Provider>
   );
};
