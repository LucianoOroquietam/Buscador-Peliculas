import React from 'react'

const EditMovie = ({ movie, getPeliculas, setEdit, setListState }) => {
    console.log(movie)
    const title_component = "Editar Pelicula";

   const saveToEdition = (e, id) => {
    e.preventDefault();

    let target = e.target;

    // Obtener películas almacenadas
    let movie_storage = getPeliculas();
    console.log("Películas antes de editar:", movie_storage);

    // Encontrar índice de la película a editar
    const index = movie_storage.findIndex(movie => movie.id === id);

    // Crear objeto actualizado
    let movie_edited = {
        id,
        image: target.image.value,
        title: target.title.value,
        description: target.description.value,
    };

    // Actualizar película en el array
    movie_storage[index] = movie_edited;

    // Guardar cambios en localStorage
    localStorage.setItem("movie", JSON.stringify(movie_storage));

    // Actualizar estados
    setListState(movie_storage);
    setEdit(0);
};


    return (
        <div className='edit_form'>
            <h3 className='title'>{title_component} : {movie.title}</h3>
            <form action="" onSubmit={e => saveToEdition(e, movie.id)}>
                <input
                    type='text'
                    name='image'
                    className='image_edit'
                    defaultValue={movie.image}
                />
                <input
                    type="text"
                    name='title'
                    className='title_edit'
                    defaultValue={movie.title}
                />
                <textarea
                    name="description"
                    defaultValue={movie.description}
                    className='descripcion_editada'>
                </textarea>
                <input type="submit" className='edit' value={"actualizar"} />
            </form>
        </div>
    )
}

export default EditMovie
