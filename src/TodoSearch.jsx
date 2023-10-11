import './TodoSearch.css';

export const TodoSearch = () => {
  return (
    <input  
    placeholder="Agregar actividad" 
    className="TodoSearch"
    onChange={(event) => {
      console.log('Escribiste en el input')
      console.log(event.target.value);
    }}
    />
  )
}
