"use strict"

let main = document.querySelector("main");
let article = document.querySelector("article");

main.insertAdjacentHTML("beforebegin", `
<header>
  <a href="/index.html"><img src="/assets/bananahexagon.png"></a>
  <ul>
    <li>Info
      <ul>
        <li><a href="/info/about">About</a></li>
        <li><a href="/info/profile">Profile</a></li>
        <li><a href="/info/contact">Contact</a></li>
      </ul>
    </li>
    <li>Blog
      <ul>
        <li><a href="/blog/2023">2023</a></li>
      </ul>
    </li>
    <li>Projects
      <ul>
        <li><a href="https://bananahexagon.github.io/butter-docs">Butter-lang</a></li>
        <li><a href="/sludgetale">Sludgetale</a></li>
        <li><a href="/projects">Other</a></li>
      </ul>
    </li>
  </ul>
  <div class="menu_button">
    <div />
  </div>
</header>
`);

main.insertAdjacentHTML("beforebegin", `
<div class="sidemenu">
  <div class="menu_shadow" />
  <div class="menu_content">
    <h2>
      クレジット
    </h2>
    <ul>
      <li>
      <p>Font : <a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP">Noto Sans Japanese</a></p>
      </li>
    </ul>
  </div>
</div>
`);

main.insertAdjacentHTML("beforeend", `
<footer>
  <p>特記のない限り、このサイトのコンテンツは<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">CC BY-SA 4.0</a>の下で利用可能です。</p>
</footer>
`);

article.insertAdjacentHTML("afterbegin",`
<div class="time_stamp">​</div>
`);