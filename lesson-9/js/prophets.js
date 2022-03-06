const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)   
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });


//loop

function displayProphets(prophet) {
    let card = documnent.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    //change the text context
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    
    //built image attributes
    ____.setAttribute('srl', prophet.imageurl);
    ____.setAttribute('alt', 'Portrait of' + prophet.name + ' ' + prophet.lastname);
    ____.setAttribute('loading', 'lazy');

    //add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);

    //add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}

