"use strict"

function Importjs(src) {
    let element = document.createElement("script");
    element.src = src;
    document.body.appendChild(element);
    return element;
}

Importjs("./styles.js");