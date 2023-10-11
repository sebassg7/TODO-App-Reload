import './TodoCounter.css'

export const TodoCounter = ({total, completed}) => {
    return (
      <h1 className='TodoCounter'>
        
        Has completado <span> {total} </span> de <span> {completed} </span> TODOS
  
      </h1>
    )
  };