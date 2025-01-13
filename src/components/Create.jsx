import React, { useState } from 'react'
import SaveToStorage from '../helpers/SaveToStorage';

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
        setId(id + 1);

        //llamada al helper -- localstorage
        SaveToStorage(movie);
    }

    return (
        <>
            <div className="add">
                <h3 className="title">{titleMovie}</h3>
                <strong>{(title && description) && "La Pelicula: " + title + " fue creada con exito"}</strong>
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
