import './TodoSearch.css';


export const TodoSearch = (
  {

    searchValue, 
    setSearchValue

  }) => {

  const onSearchValueChange = ({target}) => {
    setSearchValue(target.value)
  };

  return (
    <input  
    placeholder="Agregar actividad" 
    className="TodoSearch"
    value={searchValue}
    onChange={onSearchValueChange}
    
    />
  )
}
