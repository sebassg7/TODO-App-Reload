import './CreateTodoButton.css';


export const CreateTodoButton = () => {
  return (
    <button 
    className='CreateTodoButton'
    onClick={(event) => {
      console.log('Le diste clicl al boton')
      console.log(event);
      console.log(event.target);
    }
      
    }
    
    >+</button>
  )
}
