{
    const createElement = (define) => {
        const parent = document.createElement("div");
        parent.innerHTML = define;
        return parent.children[0];
    }

    const header_pos = document.getElementById("header");
    const header_new = createElement(`
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
    header_pos.replaceWith(header_new);
    let pos = 0;
    let b_pos = 0;
    console.log(document.documentElement.scrollHeight-window.innerHeight)
    window.addEventListener("scroll", () => {
        b_pos = pos;
        pos = window.scrollY;
        if (b_pos < pos && document.documentElement.scrollHeight-window.innerHeight > pos) {
            header_new.classList.add("invisible");
        } else {
            header_new.classList.remove("invisible");
        }
    })
}