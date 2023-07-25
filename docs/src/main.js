"use strict"

const importJS = src => {
    let element = document.createElement("script");
    element.src = src;
    document.body.appendChild(element);
    return element;
}

const importCSS = src => {
    let element = document.createElement("link");
    element.rel = "stylesheet";
    element.href = src;
    document.head.appendChild(element);
    return element;
}

const createElement = async html => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
}

const is_sp = window.innerWidth < 768;

importCSS(is_sp ? "/src/styles_sp.css" : "/src/styles_pc.css");
window.onload = async () => {
    importJS(is_sp ? "/src/styles_sp.js" : "/src/styles_pc.js").onload = async () => {
        let time_stamp_display = "";
        const page_created = document.querySelector("meta[name='page_created']");
        time_stamp_display += "作成日 - " + (page_created == null ? "" : page_created.content + " ") + "| ";
        const last_edited = document.querySelector("meta[name='last_edited']");
        time_stamp_display += "更新日 - " + (last_edited == null ? "" : last_edited.content);
        const time_stamp = createElement(`<div class="time_stamp">${time_stamp_display}</div>`);
        const article = document.querySelector("article");

        const body = document.body;
        await Promise.all([header, footer, side_menu, time_stamp, article])
        body.insertAdjacentElement("afterbegin", await side_menu);
        body.insertAdjacentElement("beforeend", await header);
        body.insertAdjacentElement("beforeend", await footer);
        (await article).insertAdjacentElement("afterbegin", await time_stamp);


        let side_button = document.querySelector(".side_button");
        side_button.addEventListener("click", async () => {
            (await side_menu).classList.toggle("opened");
        });
    }
}