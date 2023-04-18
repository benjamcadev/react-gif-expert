import {useState} from 'react'
import {AddCategory,GifGrid} from './components'; //Esto apunta al index.js

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) => {
    //categories.push(newCategory); //El push no funca con react
    
    //VERIFICA QUE NO SE REPITAN LOS VALORES DEL ARRAY DE categories
    if (categories.includes(newCategory)) {
      //SI LA CATEGORIA EXISTE NO HAGA NADA Y NO EJECUTA EL setCatrgories
      return;
    }
      
    //CUANDO QUEREMOS CAMBIAR EL ESTADO DE UN ARRAY USAMOS EL setCategories
    setCategories([ newCategory, ...categories ]);
  }
  
  
  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp</h1>
    {/* Input */}
    <AddCategory onNewCategory={onAddCategory}
    />

    {/* Listado de gif */}
   
    
        {categories.map((category)=> 
             (
              <GifGrid key={category} category={category}/>
            )
        )}
       
   
        {/* Gif item */}
    </>
    
  )
}
