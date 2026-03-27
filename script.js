const apiKey = "56e3d4bc5e660913002690c1fb439f89";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=bangalore";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
}