"use strict"

const header = createElement(`
<header>
    <a href="https://bananahexagon.github.io"><img src="/assets/normal_icon.png"></a>
    <picture class="side_button">
    <source
        srcset="/assets/hamburger_white.svg"
        media="(prefers-color-scheme: dark)"
    />
    <source srcset="/assets/hamburger_black.svg" />
    <img src="/assets/hamburger_black.svg" />
</picture>
</header>
`)

const footer = createElement(`
<footer>
    <p>特記のない限り、このサイトのコンテンツは<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">CC BY-SA 4.0</a>の下で利用可能です。</p>
</footer>
`)

let side_menu = createElement(`
<div class="side_menu">
    <h1>メニュー</h1>
    <details class="menu">
        <summary>Info</summary>
        <li><a href="/info/about">About</a></li>
        <li><a href="/info/profile">Profile</a></li>
        <li><a href="/info/contact">Contact</a></li>
    </details>
    <details class="menu">
        <summary>Blog</summary>
        <li><a href="/blog/2023">2023</a></li>
    </details>
    <details class="menu">
        <summary>Projects</summary>
        <li><a href="https://github.com/bananahexagon/sugot-lang">Sugot</a></li>
        <li><a href="/projects">Other</a></li>
    </details>
    <br />
    <h1>クレジット</h1>
    <p><a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP">Noto Sans JP</a> by Google</p>
</div>
`)