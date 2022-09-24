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
