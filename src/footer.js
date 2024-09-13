const footer = `<footer>
        <div id="footer_grid">
            <div class="footer_content">
                <h4><a href="/info/">Info</a></h4>
                <ul>
                    <li><a href="/info/about/">About</a></li>
                    <li><a href="/info/profile/">Profile</a></li>
                    <li><a href="/info/readme/">Readme</a></li>
                    <li><a href="/info/credit/">Credit</a></li>
                </ul>
            </div>
            <div class="footer_content">
                <h4>Works</h4>
                <ul>
                </ul>
            </div>
            <div class="footer_content">
                <h4><a href="/sludgetale/">SludgeTale</a></h4>
                <ul>
                </ul>
            </div>
            <div class="footer_content">
                <h4>Links</h4>
                <ul>
                    <li><a href="https://discord.com/users/834563592069447731">Discord</a></li>
                    <li><a href="https://twitter.com/g_banana_k">Twitter</a></li>
                    <li><a href="https://sushi.ski/@g_banana_k">Misskey</a></li>
                    <li><a href="https://github.com/bananahexagon">GitHub</a></li>
                </ul>
            </div>
        </div>
        <a href="/" class="logo footer_logo">
            <img src="/assets/b_hex.png" class="icon b_hex">
            <h3>BananaHexagon</h3>
        </a>
    </footer>`

const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", footer)
