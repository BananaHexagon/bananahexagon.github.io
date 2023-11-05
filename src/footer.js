{
    const createElement = (define) => {
        const parent = document.createElement("div");
        parent.innerHTML = define;
        return parent.children[0];
    }

    const footer = document.getElementById("footer");
    const footer_define = createElement(`
<footer>
Bananahexagon | <a href="/info/about.html">About</a>
</footer>
`);

    footer.replaceWith(footer_define);
}

