/*------- MENU ----------- */

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
}

function toggleCall() {
    document.querySelector("#phone").classList.toggle("come");
    document.querySelector("#callusBtn").classList.toggle("come");
}

const callusBtn = document.querySelector("#callusBtn");
const menuBtn = document.querySelector("#menuBtn");

menuBtn.onclick = toggleMenu;
callusBtn.onclick = toggleCall;


/*------- LAST-MODIFIED --------*/

var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

/*-------- PHONE CLICK -------*/
function showInfo() {
    //document.querySelector()
}