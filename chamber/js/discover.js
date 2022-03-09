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

//LAZY LOWDING IMAGES

//getting images
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameter
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');};
};

//first check to see if
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    //loop through each image and check status load if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    //just load ALL images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}