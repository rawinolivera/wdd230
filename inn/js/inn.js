/*------- MENU ----------- */

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
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

/*------  WEATHER API  ------*/

const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-18.0227011&lon=-70.3175879&exclude=hourly&appid=0c8a48091627e17ece4ad85f202a2799&units=imperial";
/*
{"coord":
    {"lon":-70.2483,
    "lat":-18.0056},
    "weather":[{"id":800,
                "main":"Clear",
                "description":"clear sky",
                "icon":"01d"}],
    "base":"stations",
    "main":{"temp":66.4,
            "feels_like":65.37,
            "temp_min":63.5,
            "temp_max":66.4,
            "pressure":1014,
            "humidity":56},
    "visibility":10000,
    "wind":{"speed":5.75,
            "deg":230},
    "clouds":{"all":0},
    "dt":1649087566,
    "sys":{"type":1,
            "id":8701,
            "country":"PE",
            "sunrise":1649069266,
            "sunset":1649111987},
    "timezone":-18000,
    "id":3928128,
    "name":"Tacna","cod":200}
*/

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#temp").textContent = jsObject.current.temp; //temperature
    const desc = jsObject.current.weather[0].description;
    document.querySelector("#condition").textContent = desc; //condition
    document.querySelector("#humidity").textContent = jsObject.current.humidity; //humidity

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    document.querySelector("#current-icon").textContent = iconsrc;
    document.querySelector("#current-icon").setAttribute("src", iconsrc);
    document.querySelector("#current-icon").setAttribute("alt", desc);

    document.querySelector("#t1").textContent = jsObject.daily[1].temp.day;
    document.querySelector("#t2").textContent = jsObject.daily[2].temp.day;
    document.querySelector("#t3").textContent = jsObject.daily[3].temp.day;
    

    function timeConverter(){

      const dt = jsObject.current.dt;

      var a = new Date(dt * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year /*+ ' ' + hour + ':' + min + ':' + sec*/ ;
      return time;
    }

    document.querySelector("#c-day").textContent = timeConverter(0);

    function timeConverter1(){

      const dt1 = jsObject.daily[1].dt;

      var a = new Date(dt1 * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' '/* + year + ' ' + hour + ':' + min + ':' + sec*/ ;
      return time;
    }

    document.querySelector("#firstDay").textContent = timeConverter1(0);

    function timeConverter2(){

      const dt2 = jsObject.daily[2].dt;

      var a = new Date(dt2 * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' '/* + year + ' ' + hour + ':' + min + ':' + sec*/ ;
      return time;
    }

    document.querySelector("#secondDay").textContent = timeConverter2(0);

    function timeConverter3(){

      const dt3 = jsObject.daily[3].dt;

      var a = new Date(dt3 * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' '/* + year + ' ' + hour + ':' + min + ':' + sec*/ ;
      return time;
    }

    document.querySelector("#thirdDay").textContent = timeConverter3(0);

  });