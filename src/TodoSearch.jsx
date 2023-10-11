import { useState } from 'react';
import './TodoSearch.css';


export const TodoSearch = () => {

  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = ({target}) => {
    setSearchValue(target.value)
  };

  console.log('Los usuarios estan buscando' + ' ' + searchValue);

  return (
    <input  
    placeholder="Agregar actividad" 
    className="TodoSearch"
    value={searchValue}
    onChange={onSearchValueChange}
    
    />
  )
}
