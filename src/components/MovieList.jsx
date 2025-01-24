import React, { useEffect, useState } from 'react'

const MovieList = () => {

    const [listState, SetListState] = useState([]);

    useEffect(() =>{
        console.log("Componentes del listado de peliculas cargado!!")
        getPeliculas();
    }, []);


    const getPeliculas  = () => {
        //el nombre de la key es el mismo nombre con el que guardo en el component de create.jsx
        let movies = JSON.parse(localStorage.getItem("movie"));
        SetListState(movies);
    }

    return (
        <>
            {Array.isArray(listState) && listState.map(movie => (
                <article key={movie.id} className="peli-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.description}</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
            ))}
        </>
    );
    
}

export default MovieList
