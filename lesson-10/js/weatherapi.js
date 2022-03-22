const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=0c8a48091627e17ece4ad85f202a2799&units=imperial";
/*  TACNA
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3928128&appid=0c8a48091627e17ece4ad85f202a2799&units=imperial";
*/
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;  //w
    const desc = jsObject.weather[0].description; //w-now
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });  


