import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';


function App() {
  
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/>
      
    </>
  )
};

export default App
