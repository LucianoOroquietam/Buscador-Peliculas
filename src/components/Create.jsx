import React, { useState } from 'react';
import { SaveToStorage } from '../helpers/SaveToStorage';

const Create = ({ setListState }) => {

    const [movieState, setMovieState] = useState({
        image: '',
        title: '',
        description: ''
    });
    const [message, setMessage] = useState('');

    const { image, title, description } = movieState;

    const titleMovie = "Añadir películas";

    const getDataForm = e => {
        e.preventDefault();

        // validamos campos del form
        if (!title || !description || !image) {
            if (!title && !description && !image) {
                setMessage("Falta el título, la imagen y la descripción");
                resetMessage();
            } else if (!title) {
                setMessage("Falta el título");
                resetMessage();

            } else if (!description) {
                setMessage("Falta la descripción");
                resetMessage();
            }
            else if (!image) {
                setMessage("Falta la imagen");
                resetMessage();
            }
            return;
        }

        // procedemos si se ambos campos estan completos
        let movie = {
            id: Date.now(),
            image,
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
            {message && <strong className=''>{message}</strong>}

            <form onSubmit={getDataForm}>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder='URL de la imagen'
                    value={image}
                    onChange={e => setMovieState({ ...movieState, image: e.target.value })}
                />

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
