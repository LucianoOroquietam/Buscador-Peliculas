import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import Search from './components/Search'
import Create from './components/Create'

const App = () => {
    return (
        <div className="layout">

            {/*Cabecera*/}
            <Header></Header>

            {/*Listado de peliculas*/}
            <section id="content" className="content">
                <MovieList></MovieList>
            </section>

            {/*Barra lateral - Busqueda peliculas*/}
            <aside className="lateral">
                <Search></Search>
                <Create></Create>
            </aside>

            {/*Pie de página*/}
            <Footer></Footer>

        </div>
    )
}

export default App
