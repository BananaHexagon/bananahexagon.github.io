let main = document.getElementById("main");
let article = document.getElementById("article");
let commonout = '<div id="menushadow" class="sidemenu_off"></div><div id="sidemenu" class="sidemenu_off"><h2>クレジット</h2><p><a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP">Noto Sans Japanese</a> by Google</p><h2>リンク</h2><p><a href="/index.html">トップページ</a></p><p><a href="/article/index.html">記事一覧</a></p></div><header><label class="hamburger" id="hamburger1"><div></div><div></div><div></div><input type="checkbox" id="sideswitch" onclick="slideClick()" for="hamburger1"></label></header>'
let commoninner ='<footer><p>特記のない限り、ページ内のコンテンツは全て<a href="http://creativecommons.org/licenses/by-sa/2.0/"> CC BY-SA 2.0</a>の下に利用可能です。</p></footer>';
let commonads = '<label id="forads">広告を見る<input type="button" onClick="adsClick()" for="forads"></label>';
let adslist = ["541060657"];
main.insertAdjacentHTML("beforeend", commoninner);
main.insertAdjacentHTML("beforebegin", commonout);
article.insertAdjacentHTML("beforeend", commonads);

let forads = document.getElementById("forads");

let sideswitch = document.getElementById("sideswitch");
sideswitch.checked = true;
let sidemenu = document.getElementById("sidemenu");
let menushadow = document.getElementById("menushadow");

let adshtml = '<iframe src="https://turbowarp.org/' + adslist[Math.floor(Math.random() * adslist.length)] + '/embed/?interpolate&hqpen" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>';

function slideClick() {
	if (sideswitch.checked) {
		sidemenu.classList.add("sidemenu_off");
		menushadow.classList.add("sidemenu_off");
	} else {
		sidemenu.classList.remove("sidemenu_off");
		menushadow.classList.remove("sidemenu_off");
	}
}

function adsClick() {
	forads.innerHTML = adshtml;
}

