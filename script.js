$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
    }).datepicker('update', new Date()); 
}); 

locationInput = document.getElementById("input-datalist")
datalist = document.getElementById("list-city")


datalist.innerHTML = "";

temp = []

addCity("Las Vegas")

document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);

city = ""
url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f975d4b3a9c05c4d60c2354c925012ca`

locationInput.addEventListener("input", event =>{
    event.preventDefault()
    city_name = locationInput.value
    console.log(city_name)
})

locationInput.addEventListener("submit", event => {
    event.preventDefault()
})

function addCity (cityName) {
    singleCity = document.createElement('option')
    singleCity.textContent = cityName
    datalist.appendChild(singleCity)
}