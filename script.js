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


document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);

city = "Irvine"
function apiData(url){
    return fetch(url)
    .then(res => res.json())
    .catch(err => { throw err });
}

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

locationInput.addEventListener("submit", event => {
    event.preventDefault()
})

function addCity (cityName) {
    singleCity = document.createElement('option')
    singleCity.textContent = cityName
    datalist.appendChild(singleCity)
}

let weatherform = document.getElementById("weatherform")
weatherform.addEventListener("submit" , event =>{
    event.preventDefault()
    if(locationInput.value !=""){
        document.location.href="searchresults.html"
    }
    else{
        alert("Enter city name")
    }
})