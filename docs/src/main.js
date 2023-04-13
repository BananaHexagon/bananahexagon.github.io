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

window.onload = () => {
    Importjs("/src/styles_pc.js").onload = () => {
        let time_stamp = "";
        const page_created = document.querySelector("meta[name='page_created']");
        time_stamp += page_created == "作成日" + (null ? "-" : page_created.content);
        const last_edited = document.querySelector("meta[name='last_edited']");
        time_stamp += last_edited == "更新日" + (null ? "-" : last_edited.content);
        document.getElementsByClassName("time_stamp")[0].textContent = time_stamp;

        let menu_button = document.querySelector(".menu_button");
        let side_menu = document.querySelector(".sidemenu");
        menu_button.addEventListener("click", () => {
            menu_button.classList.toggle("button_right");
            side_menu.classList.toggle("menu_opened");
        });
    }
}