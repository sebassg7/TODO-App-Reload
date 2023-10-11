import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaulTodos = [
  {text: 'Estudiar React.js', completed: true},
  {text: 'Aprender una escala musical', completed: false},
  {text: 'Explorar nueva música', completed: false},
  {text: 'Practicar guitarra y bajo eléctrico', completed: false},
]


function App() {
  
  return (
    <>
      <TodoCounter total={5} completed={10}/>
      <TodoSearch/>

      <TodoList>
        {
          defaulTodos.map((todo)=>(
            <TodoItem 
            key={todo.text}
            {...todo}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton/>
      
    </>
  )
};

export default App
