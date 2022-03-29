/*------- MENU ----------- */

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

const menuBtn = document.querySelector("#menuBtn");
menuBtn.onclick = toggleMenu;

/*------- LAST-MODIFIED --------*/

var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;