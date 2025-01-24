import React, { useState } from 'react'
import { SaveToStorage } from '../helpers/SaveToStorage';

const Create = () => {
    const titleMovie = "Añadir peliculas";

    const [id, setId] = useState(1);
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    })

    //para no usar movieState.title lo desestructuro
    const { title, description } = movieState;

    const getDataForm = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        let movie = {
            id,
            title,
            description,
        }


        setMovieState(movie);
        // se recomienda usar lo de abajo. No esta forma => setId(id + 1);
        setId(prevId => prevId + 1);

        console.log(movie)
        //llamada al helper -- localstorage
        //agregar que no se puedan agregar nombres de pelis que ya existen

        SaveToStorage("movie",movie);
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{titleMovie}</h3>
                <strong>{(title && description) && "La Pelicula: " + title + " fue creada con exito"}</strong>
                <strong>{(!title && !description) && "Falta el titulo y la descripcion"}</strong>
                <strong>{(!title && description) && "Falta el titulo"}</strong>
                <strong>{(title && !description) && "Falta la descripcion"}</strong>

                <form onSubmit={getDataForm}>
                    <input type="text" id="title" name='title' placeholder="Titulo" />
                    <textarea id="description" name='description' placeholder="Descripción"></textarea>
                    <input type="submit" id="save" name='save' value="Guardar" />
                </form>
            </div>
        </>
    )
}

export default Create
