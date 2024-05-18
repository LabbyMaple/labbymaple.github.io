$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
    }).datepicker('update', new Date()); 
}); 

locationInput = document.getElementById("input-datalist")
datalist = document.getElementById("list-city")
console.log(datalist)

datalist.innerHTML = "";

temp = []
var latitude = 0
var longitude = 0

document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);

city = "Irvine"
function apiData(url){
    return fetch(url)
    .then(res => res.json())
    .catch(err => { throw err });
}


city_name = ""
locationInput.addEventListener("input", async event =>{
    event.preventDefault()
    city_name =locationInput.value
    datalist.innerHTML = "";
    console.log(city_name)
    url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=f975d4b3a9c05c4d60c2354c925012ca`
    data = await apiData(url)
    var fullname = ""
    for (var i = 0; i < data.length; i++){
        fullname += data[i]["name"]
        fullname += ", "
        fullname += data[i]["state"]
        fullname += ", "
        fullname += data[i]["country"]
        addCity(fullname)
        fullname = ""
    }
})

async function onInput(){
    url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=f975d4b3a9c05c4d60c2354c925012ca`
    data = await apiData(url)
    latitude = data[0]["lat"]
    longitude = data[0]["lon"]
}

locationInput.addEventListener("submit", event => {
    event.preventDefault()
    
})

function addCity (cityName) {
    singleCity = document.createElement('option')
    singleCity.textContent = cityName
    datalist.appendChild(singleCity)
}

let weatherform = document.getElementById("weatherform")
weatherform.addEventListener("submit" ,async event =>{
    event.preventDefault()
    if(locationInput.value !=""){
        // document.location.href="searchresults.html"
        await getWeatherData()
    }
    else{
        alert("Enter city name")
    }
})

var weatherData = {}
async function getWeatherData(){
    console.log(latitude)
    weatherurl = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=2024-05-01&end_date=2024-05-01&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&timezone=auto`
    weatherData = await apiData(weatherurl)
    console.log(`Elevation: ${weatherData["elevation"]}`)
    console.log()
}