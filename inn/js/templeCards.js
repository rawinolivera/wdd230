/*-------- PICKING A TEMPLE -------*/
const t001 = document.querySelector("t001");

console.log(t001);

function togglePick() {
    document.querySelector("t001").classList.toggle("pick");
}



t001.onclick = togglePick;