/* Last Modified */
var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("head-date").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*CURRENT DATE*/ 
const datefield = document.querySelector("#head-date");
// for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

//Day of the Week
const weekDay = new Date().getDay();

function meetBanner() {
    if (weekDay == '1' || weekDay == '2'){
        document.getElementById("banner").style.display = "block"
    } else {
        document.getElementById("banner").style.display = "none"
    }
}

//Calling the function!
(meetBanner)();

let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 50 && s > 3){
    windchill = windChill(t, s);
    windchill = `${windchill}&#176;F`;
} else {
    windchill = "N/A";
} 

//output
document.querySelector("#w").innerHTML = windchill;

function windChill(temp,speed) {
    return Math.round(35.74 + .6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
}
