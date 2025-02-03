import React from 'react'

const Header = () => {
    return (
        <>
            {/*Cabecera*/}
            <header className="header">
                <img src="../../public/img/logo2.png" alt="" />

                <h1>CineXplorer</h1>
            </header>

            {/*Barra de navegación*/}
            <nav className="nav">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Peliculas</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
