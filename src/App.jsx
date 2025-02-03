import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import Search from './components/Search'
import Create from './components/Create'

const App = () => {

    const [listState, setListState] = useState([]);

    return (
        <div className="layout">

            {/*Cabecera*/}
            <Header></Header>

            {/*Listado de peliculas*/}
            <section id="content" className="content">
                <MovieList listState={listState} setListState={setListState}></MovieList>
            </section>

            {/*Barra lateral - Busqueda peliculas*/}
            <aside className="lateral">
                <Search listState={listState} setListState={setListState}></Search>
                <Create setListState={setListState}></Create>
            </aside>

            {/*Pie de página*/}
            <Footer></Footer>

        </div>
    )
}

export default App
