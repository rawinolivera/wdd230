/*------- MENU ----------- */

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

const menuBtn = document.querySelector("#menuBtn");
menuBtn.onclick = toggleMenu;