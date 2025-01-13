import React from 'react'

export const SaveToStorage = (key, element) => {
    //conseguir los elementos que ya tenemos en el local storage
    let elements = JSON.parse(localStorage.getItem("key"));


    //comprobar si es un array 
    if (Array.isArray(elements)) {
        //añado dentro del array un elemento nuevo
        elements.push(element);
    } else {
        //deberia crear un arreglo
        elements = [element];
    }

    //guardar en el local storage
    localStorage.setItem("key", JSON.stringify(elements));
    console.log(elements)

    //retorno el objeto guardado
    return element;
}
