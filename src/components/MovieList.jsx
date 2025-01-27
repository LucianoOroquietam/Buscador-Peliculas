import React, { useEffect } from 'react'

const MovieList = ({ listState, setListState }) => {

    //const [listState, SetListState] = useState([]);

    useEffect(() => {
        console.log("Componentes del listado de peliculas cargado!!")
        console.log(JSON.parse(localStorage.getItem('movie')));

        getPeliculas();

    }, []);


    const getPeliculas = () => {
        //el nombre de la key es el mismo nombre con el que guardo en el component de create.jsx
        let movies = JSON.parse(localStorage.getItem("movie"));
        setListState(movies);
    }

    const deleteMovie = (id) => {
        // obtengo las peliculas del localStorage (me traigo el arreglo de pelicuas)
        let movies = JSON.parse(localStorage.getItem("movie"));
        // se busca la peli que coincida con el id del evneto click a traves de un filtro
        let filteredMovies = movies.filter(movie => movie.id !== id);
        // una vez que se filtran las peliculas, se guarda el nuevo arreglo (sin la pelicula eliminada) 
        localStorage.setItem("movie", JSON.stringify(filteredMovies));
        // actualiza el estado de la lista de peliculas, sin la pelicula que se elimino
        setListState(filteredMovies);
    }


    return (
        <>
            {Array.isArray(listState) && listState.map(movie => (
                <article key={movie.id} className="peli-item">
                    <h3 className="title">{movie.title}</h3>
                    <p className="description">{movie.description}</p>
                    <button className="edit">Editar</button>
                    <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                </article>
            ))}
        </>
    );

}

export default MovieList
