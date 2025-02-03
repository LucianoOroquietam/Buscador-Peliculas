import React, { useState } from 'react'
import { createPortal } from 'react-dom';

const Search = ({listState, setListState}) => {

    const [search, setSearch] = useState('');
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (e) => {
        
        //Crear estado y actualizar
        setSearch(e.target.value);

        //sobre el almacenamiento del local storage voy a buscar una peli en especifico 
        let movieFilter = listState.filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLowerCase()) 
        } ) 
    
        if(search.length <= 1 || movieFilter <= 0){
            movieFilter = JSON.parse(localStorage.getItem("movie"));
            setNotFound(true);
        }else{
            setNotFound(false);
        }
        
        setListState(movieFilter);
    }
    
    return (
        <>
            <div className="search">
                <h3 className="title">Buscador</h3>

                {(notFound && search.length > 1) &&
                    <span className='not-found'>No se ha encontrado ninguna coincidencia</span> 
                }
                
                <form>
                    <input
                        type="text"
                        id="search_field"
                        name='search'
                        placeholder='Ingrese el nombre de la pelicula'
                        autoComplete='off'
                        onChange={searchMovie}
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </>
    )
}

export default Search
