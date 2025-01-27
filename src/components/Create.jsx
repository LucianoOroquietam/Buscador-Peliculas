import React, { useState } from 'react';
import { SaveToStorage } from '../helpers/SaveToStorage';

const Create = ({ setListState }) => {

    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    });
    const [message, setMessage] = useState('');

    const { title, description } = movieState;

    const titleMovie = "Añadir películas";

    const getDataForm = e => {
        e.preventDefault(); 

        // validamos campos del form
        if (!title || !description) {
            if (!title && !description) {
                setMessage("Falta el título y la descripción");
                resetMessage();
            } else if (!title) {
                setMessage("Falta el título");
                resetMessage();

            } else if (!description) {
                setMessage("Falta la descripción");
                resetMessage();
            }
            return;
        }

        // procedemos si se ambos campos estan completos
        let movie = {
            id: Date.now(),
            title,
            description,
        };

        // Guardar en estado local
        setMovieState(movie);

        // renderizamos/actualizamos la lista de peliculas
        setListState(movies => [...movies, movie]);

        // guardar en LocalStorage
        SaveToStorage("movie", movie);

        // mensaje de que fue creado
        setMessage(`La película "${title}" fue creada con éxito`);
        resetMessage();

        // limpiar el form
        e.target.reset();

    };

    const resetMessage = () => {
        setTimeout(() => setMessage(''), 3000);
    }

    return (
        <div className="add">
            <h3 className="title">{titleMovie}</h3>
            {message && <strong>{message}</strong>}

            <form onSubmit={getDataForm}>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Título"
                    value={title}
                    onChange={e => setMovieState({ ...movieState, title: e.target.value })}
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descripción"
                    value={description}
                    onChange={e => setMovieState({ ...movieState, description: e.target.value })}
                />
                <input type="submit" id="save" name="save" value="Guardar" />
            </form>
        </div>
    );
};

export default Create;
