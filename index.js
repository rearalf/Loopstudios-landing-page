const buttonNavBarMenu = document.getElementById('button-navbar')
const navbarBrand = document.getElementById('navbar-brand')
const navbarContent = document.getElementById('navbar-content')
const buttonNavbarIcon = document.getElementById('button-navbar-icon')
const body = document.getElementsByTagName('body')[0]

let openMenu = false
const handleChageStateMenu = () => {
	body.classList.toggle('js-body-hidden-overflow')
	navbarBrand.classList.toggle('js-fixed-icon-brand')
	buttonNavBarMenu.classList.toggle('js-fixed-icon-brand')
	buttonNavBarMenu.classList.toggle('js-fixed-icon')
	navbarContent.classList.toggle('js-navbar-content')
	navbarContent.classList.toggle('js-move-right')
	if (openMenu) {
		buttonNavbarIcon.setAttribute('src', 'images/icon-hamburger.svg')
		openMenu = false
	} else {
		buttonNavbarIcon.setAttribute('src', 'images/icon-close.svg')
		openMenu = true
	}
}

buttonNavBarMenu.addEventListener('click', handleChageStateMenu)
