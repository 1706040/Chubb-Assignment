async function getCountries() {
    let country, data;
    try{
        // fetching
        country = await fetch("https://restcountries.eu/rest/v2/all");
        data = await country.json();
        
        // making the div
        let outerDiv = document.createElement("div");
        outerDiv.className = "container-md";
        outerDiv.style.margin = "1rem";
        outerDiv.id = "outer-div";

        document.body.appendChild(outerDiv);

        for(let i=0; i<45; i+=3)
        {
            // making rows
            let row = "<div class=\"row\" id=\"row" +i+ "\"></div>";

            document.getElementById("outer-div").innerHTML+=row;

            let countryCards = "";
            for(let j=0; j<3; j++)
            {
                // country Card
                countryCards = "<div class=\"card text-white bg-secondary text-center col\" style=\"max-width: 30rem; margin:1rem\"><div class=\"card-header bg-dark mb-2 text-center\">"+data[i+j].name+"</div><img class=\"card-img-top\" src=\""+data[i+j].flag+"\" alt=\"flag\"><div class=\"card-body\"><h6 class=\"card-title\" id=\"city\">Capital: "+data[i+j].capital+"</h6><h6 class=\"card-title\">Region: "+data[i+j].region+"</h6><h6 class=\"card-title\">Country Code: "+data[i+j].alpha3Code+"</h6><button onclick=\"getWeather(this)\" class=\"btn btn-primary bg-dark\">Click for Weather</button></div></div>";
                document.getElementById("row"+i).innerHTML+=countryCards;
            }
        } 

    } catch(error)
    {
        console.log(error);
    }
}

getCountries();


function populateAbove(weatherObj) {
    try{
        var message = "Weather: "+weatherObj.weather[0].main+"        Temprature: "+weatherObj.main.temp+" Kelvin";
        alert(message);
    } catch(error)
    {
        alert("Something wrong with the Capital!")
    }
}

function errorMsg(response) {
    alert(response.message);
}

function getWeather(element){
    var text = element.parentNode.getElementsByTagName("h6")[0].innerText;
    var city = text.split("Capital: ");

    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3cb1c67a94abd0c6e88b782fcbe9d17a";

    fetch(url).then(function(resp){
    return resp.json();
    }).then(populateAbove).catch(errorMsg);
}
