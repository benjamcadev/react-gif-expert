import { useState } from "react"


export default function AddCategory({onNewCategory}) {

  
    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setinputValue(target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) { return;} //Limitar que se ingresen mas de 2 caracteres para buscar
        onNewCategory(inputValue.trim());
        setinputValue(''); //limpiar input
    }

  return (
    <form onSubmit={ onSubmit}>
        <input type="text" placeholder="Buscar gif" value={inputValue
        } onChange={onInputChange}>
        </input>
    </form>
    
  )
}
