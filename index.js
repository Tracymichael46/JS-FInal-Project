// http://www.omdbapi.com/?i=tt3896198&apikey=55655026
let isMenuOpen = false;

function togglemenu() {
    if (isMenuOpen) {
        isMenuOpen = false;
        return document.body.classList.remove("menu__open")
    }
    isMenuOpen = true;
    document.body.clasList += ' menu__open'
}