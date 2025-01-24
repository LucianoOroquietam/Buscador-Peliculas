import React from 'react'

export const SaveToStorage = (key, element) => {
    //conseguir los elementos que ya tenemos en el local storage
    let elements = JSON.parse(localStorage.getItem(key)) || [];

    //comprobar si es un array y que no se repitan las pelis
    if (Array.isArray(elements) && !elements.some(movie => movie.title.toLowerCase() === element.title.toLowerCase())) {
        //añado dentro del array un elemento nuevo
        elements.push(element);
        //guardar en el local storage
        localStorage.setItem(key, JSON.stringify(elements));
        console.log(elements)
    } else {
        //deberia crear un arreglo
        elements = [element];
    }


    //retorno el objeto guardado
    return element;
}



