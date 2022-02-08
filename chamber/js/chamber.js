function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

function move(){
    document.getElementById("head-date").style.display = "none";
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
x.onclick = move;