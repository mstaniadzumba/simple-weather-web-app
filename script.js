

const apiKey ="1e16616b3193ff2a5c6c66ab06900a4c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city){
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0])  
   
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
