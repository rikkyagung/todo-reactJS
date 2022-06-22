import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import Todo from "./pages/Todo";

function App() {
   return (
      <ThemeProvider>
         <TodoProvider>
            <Todo />
         </TodoProvider>
      </ThemeProvider>
   );
}
export default App;
