let main = document.getElementById("main");
let commonout = "<div id=\"menushadow\" class=\"sidemenu_off\"></div><div id=\"sidemenu\" class=\"sidemenu_off\"><h2>クレジット</h2><p><a href=\"https://fonts.google.com/noto/specimen/Noto+Sans+JP\">Noto Sans Japanese</a> by Google</p><h2>Links</h2><a href=\"/index.html\">Home</a><a href=\"/article/index.html\">Index</a></div><header><label class=\"hamburger\" id=\"hamburger1\"><div></div><div></div><div></div><input type=\"checkbox\" id=\"sideswitch\" onclick=\"buttonClick()\" for=\"hamburger1\"></label></header>"
let commoninner ="<footer><p>特記のない限り、ページ内のコンテンツは全て<a href=\"http://creativecommons.org/licenses/by-sa/2.0/\"> CC BY-SA 2.0</a>の下に利用可能です。</p></footer>";
main.insertAdjacentHTML("beforeend", commoninner);
main.insertAdjacentHTML("beforebegin", commonout);

function buttonClick() {
	if (sideswitch.checked) {
		sidemenu.classList.add("sidemenu_off");
		menushadow.classList.add("sidemenu_off");
	} else {
		sidemenu.classList.remove("sidemenu_off");
		menushadow.classList.remove("sidemenu_off");
	}
}

let sideswitch = document.getElementById("sideswitch");
sideswitch.checked = true;
let sidemenu = document.getElementById("sidemenu");
let menushadow = document.getElementById("menushadow");
