# **Documentación del Proyecto: Buscador de Películas con LocalStorage**

## **Objetivo del Proyecto**

Este proyecto tiene como objetivo crear una aplicación que permita al usuario buscar, agregar, eliminar y modificar películas en una lista almacenada en el `localStorage` del navegador. Además, incluye funcionalidades de filtrado y búsqueda utilizando eventos y hooks en React.

## **Tecnologías Usadas**

* **React**: Librería de JavaScript para construir la interfaz de usuario.
* **localStorage**: API del navegador para almacenar datos localmente en el navegador del usuario.
* **Hooks**: `useState` y `useEffect` para manejar el estado de la aplicación y efectos secundarios.
* **Eventos y filtros**: Para la interacción con la interfaz y la búsqueda de películas.

## **Estructura del Proyecto**

1. **`App.js`**: Componente principal donde se gestionan el estado de las películas y se renderizan los componentes.
2. **`MovieList.js`**: Componente que muestra las películas almacenadas.
3. por agregar...

## **Flujo de la Aplicación**

### **1. Gestión del `localStorage`**

Las películas se almacenan en el `localStorage`, lo que permite que la información persista incluso cuando el usuario recarga la página. Para interactuar con `localStorage`, se crean funciones auxiliares.
