const json = '{"ads": ["541060657","739525745","736963480"]}';
const obj = JSON.parse(json);

const main = document.getElementById("main");
const article = document.getElementById("article");
const common_1 = '<div id="menu_shadow" class="left_off"></div><div class="left_off" id="left_menu"><h2>リンク</h2><p><a href="/index.html">トップページ</a></p><p><a href="/article/">ブログ</a></p><p><a href="/creation/sludgetale/">Sludgetale</a></p><p><a href="/creation/anythings/">謎創作</a></p><h2>クレジット</h2><p><a href="https://fonts.google.com/noto/specimen/Noto+Sans+JP">Noto Sans Japanese</a> by Google</p><header><label class="hamburger" id="hamburger_left"><div></div><div></div><div></div><input type="checkbox" id="left_switch" onclick="left_Click()" for="hamburger_left"></label></header>'
const common_2 = '<footer><div></div><p>特記のない限り、ページ内のコンテンツは全て<a href="http://creativecommons.org/licenses/by-sa/2.0/"> CC BY-SA 2.0</a>の下に利用可能です。</p><div></div></footer>';
main.insertAdjacentHTML("afterend", common_1);
main.insertAdjacentHTML("beforeend", common_2);

const for_ads = document.getElementById("for_ads");

const left_switch = document.getElementById("left_switch");
left_switch.checked = true;
const left_menu = document.getElementById("left_menu");
const menu_shadow = document.getElementById("menu_shadow");

const ads_random = Math.floor(Math.random() * obj.ads.length);
const ads_html = '<iframe src="https://turbowarp.org/' + obj.ads[ads_random] + '/embed/?interpolate&hqpen" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe><a href ="https://scratch.mit.edu/projects/' + obj.ads[ads_random] + '">リンク</a>';

function left_Click() {
	if (left_switch.checked) {
		left_menu.classList.add("left_off");
		menu_shadow.classList.add("left_off");
	} else {
		left_menu.classList.remove("left_off");
		menu_shadow.classList.remove("left_off");
	}
}

function ads_Click() {
	for_ads.innerHTML = ads_html;
}
