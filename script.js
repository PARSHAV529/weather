const apikey="11960e7af0affb96e767b68d9d9fe48c"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let input = document.querySelector("#srchin")
let searchbtn = document.querySelector("#srchbtn")
let icon = document.querySelector("#icon")
 

	searchbtn.addEventListener("click",()=>{
        getWeather(input.value)
		
	})



async function getWeather(cityname){
	const response= await fetch(apiurl+ cityname +`&appid=${apikey}`)
	

	if(response.status == 404){
		input.classList.add("invalid")
		setTimeout(() => {
			input.classList.remove("invalid")
		}, 500);
		input.value=null
		input.placeholder="Please enter valid city name"
		document.getElementById("hidden").style.visibility="hidden"
		document.querySelector(".card").style.height="5rem"
    }
	else{
		document.getElementById("hidden").style.visibility="visible"
		document.querySelector(".card").style.height="32rem"

		const data=await response.json()
	
	document.querySelector(".temp-icon h2").innerHTML = data.name
	// document.querySelector(".temp-icon img").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
	document.querySelector(".temp-icon h1").innerHTML=Math.round(data.main.temp)+ "&#8451;"
	document.querySelector("#humtxt").innerHTML=data.main.humidity +"%"
	document.querySelector("#windtxt").innerHTML=data.wind.speed +" Km/s"

		if(data.weather[0].main=="Clouds"){
			icon.src="./weather-app-img/clouds.png"
	
		}
		else if(data.weather[0].main=="Rain"){
			icon.src="./weather-app-img/rain.png"
		}
		else if(data.weather[0].main=="Snow"){
			icon.src="./weather-app-img/snow.png"
		}
		else if(data.weather[0].main=="Clear"){
			icon.src="./weather-app-img/clear.png"
		}
		
		else if(data.weather[0].main=="Drizzle"){
			icon.src="./weather-app-img/drizzle.png"
		}
		else{
			icon.src="./weather-app-img/clear.png"
		}
	

	}

	

}

