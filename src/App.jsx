import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { useState } from 'react';

const defaulTodos = [
  {text: 'Estudiar React.js', completed: true},
  {text: 'Aprender una escala musical', completed: false},
  {text: 'Explorar nueva música', completed: false},
  {text: 'Practicar guitarra y bajo eléctrico', completed: false},
  {text: 'Investigar sobre el mejoramiento de suelos', completed: true},
  {text: 'Limpiar escritorio', completed: true},
]

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaulTodos);

  const searchedTodos = todos.filter(todo =>{
    const todoText = todo.text.toLowerCase();
    const searchValueText = searchValue.toLowerCase();
    const coincidenceText = todoText.includes(searchValueText);
    return coincidenceText
  })

  // console.log('Los usuarios estan buscando' + ' ' + searchValue);


  return (
    <>
      <TodoCounter  todosCounter={todos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        todoSearch = {todos}
      />

      <TodoList>
        {
          searchedTodos.map((todo)=>(
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
