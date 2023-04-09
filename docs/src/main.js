"use strict"

function Importjs(src) {
    let element = document.createElement("script");
    element.src = src;
    document.body.appendChild(element);
    return element;
}

function Importcss(src) {
    let element = document.createElement("link");
    element.rel = "stylesheet";
    element.href = src;
    document.head.appendChild(element);
    return element;
}

Importcss("/src/styles_pc.css");
document.head.appendChild((() => {
    let element = document.createElement("link");
    element.rel = "icon";
    element.href = "/assets/favicon.ico";
    return element;
})())

body.onload((()=>{
    Importjs("/src/styles_pc.js");
})());