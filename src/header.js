{
    const createElement = (define) => {
        const parent = document.createElement("div");
        parent.innerHTML = define;
        return parent.children[0];
    }

    const header = document.getElementById("header");
    const header_define = createElement(`
<header>
    <ul>
        <li><a href="/note/">Note</a></li>
        <li><a href="/info/">Info</a></li>
        <li><a href="/projects.html">Projects</a></li>
    </ul>
    <a href="/index.html">
        <img src="/assets/normal_icon.png">
    </a>
</header>
`);

    header.replaceWith(header_define);

}