
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category); //ES UN CUSTOM HOOK


  return (
   <>
   <h3>{category}</h3>
   {
    isLoading && (<h2>Cargando...</h2>) //IF isLoading is true renderiza el <h2>Cargando...</h2> 
   }
   
   <div className="card-grid">
    {
      images.map((image) => (
      <GifItem key={image.id} {...image}/> //LO QUE HACE {...image} ES MANDAR TODO EL OBJETO AL COMPONENTE HIJO Y ASI PUEDO ACCEDER A TODAS LAS PROPS
      ))
    }
    
   </div>
   </>
  )
}
