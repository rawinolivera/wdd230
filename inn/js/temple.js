/*------- MENU ----------- */

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
    document.querySelector("#banner").classList.toggle("open");
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


/* ------ JSON DATA ------ */

const requestURL = 'https://rawinolivera.github.io/wdd230/inn/data/temple.json';
const chips = document.querySelector('.chips');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {
    let chip = document.createElement('section');
    let templeName = document.createElement('h3');
    let picture = document.createElement('img');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('p');

    templeName.textContent = `${temple.name}`;
    picture.src = temple.imageurl;
    address.textContent = `${temple.address}`;
    telephone.textContent = `${temple.telephone}`;
    email.textContent = `${temple.email}`;
    
    picture.alt = `{temple.name}`;
    chip.className = `unicard`;
    templeName.className = `templeName`; 

    chip.appendChild(templeName);
    chip.appendChild(picture);
    chip.appendChild(address);
    chip.appendChild(telephone);
    chip.appendChild(email);

    chips.appendChild(chip);
}