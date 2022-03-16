/* ------ MENU ------ */
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

//BANNER
const weekDay = new Date().getDay();

function meetBanner() {
    if (weekDay === 1 || weekDay === 2){
        document.querySelector("#banner").style.display = "block"
    } else {
        document.querySelector("#banner").style.display = "none"
    }
}
//Calling the function!
(meetBanner)();

//LAZY LOADING IMAGES

//getting images
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameter 
const imgOptions = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 1,
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
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

/* ------ JSON DATA ------ */

const requestURL = 'https://rawinolivera.github.io/wdd230/chamber/data/data.json';
const chips = document.querySelector('.chips');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const members = jsonObject['members'];
        members.forEach(displayMembers);
    });

function displayMembers(member) {
    let chip = document.createElement('section');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');

    image.src = member.imageurl;
    address.textContent = `${member.address}`;
    phoneNumber.textContent = `${member.phoneNumber}`;
    website.textContent = `${member.website}`;
    
    image.alt = `Company Logo`;
    website.href = `${member.website}`;



    chip.appendChild(image);
    chip.appendChild(address);
    chip.appendChild(phoneNumber);
    chip.appendChild(website);

    chips.appendChild(chip);
}