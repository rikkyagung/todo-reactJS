import { ThemeProvider } from "./context/ThemeContext";
import TodoReducer from "./pages/TodoReducer";
import { ContextReducerProvider } from "./context/ContextReducer";

function App() {
   return (
      <ThemeProvider>
         <ContextReducerProvider>
            <TodoReducer />
         </ContextReducerProvider>
      </ThemeProvider>
   );
}
export default App;
