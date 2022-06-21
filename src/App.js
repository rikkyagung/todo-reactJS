import { TodoProvider } from "./context/todoContext";
import Todo from "./pages/Todo";

function App() {
   return (
      <TodoProvider>
         <Todo />
      </TodoProvider>
   );
}
export default App;
