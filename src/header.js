const createElement =  (define) => {
    const parent = document.createElement("div");
    parent.innerHTML = define;
    return parent;
}

const header = document.getElementById("header");
const header_define = createElement(`
<header>
    <ul>
        <li><a href="/note.html">Note</a></li>
        <li><a href="/info.html">Info</a></li>
        <li><a href="/projects.html">Projects</a></li>
    </ul>
    <a href="/index.html">
        <img src="/assets/normal_icon.png">
    </a>
</header>
`);

header.replaceWith(header_define);

