import './TodoCounter.css'

export const TodoCounter = ({todosCounter}) => {
      const completedTodos = todosCounter.filter( todo =>
        !!todo.completed
      ).length;
    
      const totalTodos = todosCounter.length; 
    
    return (
      <h1 className='TodoCounter'>
        
        Has completado <span> {completedTodos} </span> de <span> {totalTodos} </span> TODOS
  
      </h1>
    )
  };