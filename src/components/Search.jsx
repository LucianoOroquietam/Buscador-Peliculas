import React, { useState } from 'react'
import { createPortal } from 'react-dom';

const Search = () => {

    const [search, setSearch] = useState('');

    const searchMovie = () => {
        
        //sobre el almacenamiento del local storage voy a buscar una peli en especifico 
        const movie = localStorage.getItem("movie");

        const movieFilter = movie.filter((movie) => m ) 

    }
    return (
        <>
            <div className="search">
                <h3 className="title">Buscador</h3>
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
