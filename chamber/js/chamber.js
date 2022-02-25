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
// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("#head-date"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

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
