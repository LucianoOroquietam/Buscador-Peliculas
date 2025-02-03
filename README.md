# **Documentación del Proyecto: Buscador de Películas con LocalStorage**

## **Documentación del Proyecto: Buscador de Películas con LocalStorage**

### **Objetivo del Proyecto**

Este proyecto tiene como objetivo crear una aplicación que permita al usuario buscar, agregar, eliminar y modificar películas en una lista almacenada en el `localStorage` del navegador. Además, incluye funcionalidades de filtrado y búsqueda utilizando eventos y hooks en React.

---

### **Tecnologías Usadas**

* **React**: Librería de JavaScript para construir la interfaz de usuario.
* **localStorage**: API del navegador para almacenar datos localmente en el navegador del usuario.
* **Hooks**: `useState` y `useEffect` para manejar el estado de la aplicación y efectos secundarios.
* **Eventos y filtros**: Para la interacción con la interfaz y la búsqueda de películas.

---

### **Estructura del Proyecto**

* **`App.js`**: Componente principal donde se gestionan el estado de las películas y se renderizan los componentes.
* **`MovieList.js`**: Componente que muestra las películas almacenadas.
* **`Create.js`**: Componente que permite agregar nuevas películas a la lista.
* **`Search.js`**: Componente para buscar y filtrar películas.
* **`Footer.js`**: Componente con la información del pie de página.
* **`Header.js`**: Componente con la cabecera de la aplicación.
* **`saveToStorage.js`**: Helper que facilita la manipulación de datos con `localStorage`.

---

### **Flujo de la Aplicación**

1. **Gestión del `localStorage`** Las películas se almacenan en el `localStorage`, lo que permite que la información persista incluso cuando el usuario recarga la página. Para interactuar con `localStorage`, se crean funciones auxiliares.
2. **Agregar Películas** El usuario puede agregar nuevas películas mediante el componente `Create`, que toma el título y el año de la película, y al hacer clic en "Agregar Película", se añade a la lista y se guarda en el `localStorage`.
3. **Visualizar Películas** Las películas almacenadas se muestran en el componente `MovieList`. Aquí el usuario puede ver todas las películas agregadas, con la opción de eliminarlas.
4. **Filtrar y Buscar** El componente `Search` permite al usuario buscar y filtrar películas en tiempo real mediante un campo de búsqueda. Se usa un hook para actualizar la lista según el término ingresado.
5. **Eliminar Películas** Cada película en la lista tiene un botón "Eliminar". Al hacer clic, la película se elimina tanto del estado de la aplicación como del `localStorage`.
6. **Persistencia** Utilizando `localStorage`, la lista de películas persiste a través de recargas de página, lo que garantiza que el usuario no pierda su información.


