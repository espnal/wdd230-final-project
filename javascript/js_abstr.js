// toggle the hamburger----------------------------------------------
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;

// Last Modification ----------------------------------------
const field = document.querySelector(".time");

field.innerHTML = `Last Modification: ${document.lastModified}`;

// -----------------------------------------------------------

const myKey = "318b4d20506cf8ad502829d2accf0043"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=${myKey}`;
fetch(url)
    .then((response) => response.json())
    .then((jsonObject) => {
        const iconsrc = `https://openweathermap.org/img/wn/${jsonObject.weather[0].icon}.png`
        const currentTemperature = document.querySelector('.current-temperature').textContent = jsonObject.main.temp.toFixed(0);
        const desc = jsonObject.weather[0].description;
        const name = document.querySelector('.name-city').innerHTML = jsonObject.name;
        const humidity = document.querySelector(".humidity").innerHTML = jsonObject.main.humidity
        document.querySelector('.weathericon').setAttribute('src', iconsrc);
        document.querySelector('.weathericon').setAttribute('alt', desc);
        document.querySelector('.condition-description').textContent = desc;
    })

// -----------------------------------------------------------

const form = document.querySelector("#form-1");
const input = document.querySelector("#form-1 input");
const msg = document.querySelector(".msg");

const titleDiv = document.querySelector(".titlediv");
const contentDiv = document.querySelector(".contentdiv");
const refresh = document.querySelector("#refresh");
const cardsDiv = document.querySelector(".cards-container");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = input.value;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${myKey}`;

    choosingDay()


    function getUrlForecast(url) {
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.json();
                }
            })
    }

    function transportData(url = urlForecast) {
        return getUrlForecast(url)
    }

    function renderWeather(index) {
        let individualDiv = document.createElement("Div")
        individualDiv.className = "individual"
        individualDiv.appendChild(image(index))
        individualDiv.appendChild(day(index));
        individualDiv.appendChild(description(index));
        individualDiv.appendChild(temperature(index));
        individualDiv.appendChild(humidity(index));

        contentDiv.appendChild(individualDiv);
    }

    function temperature(data) {
        debugger
        let temperature = document.createElement("p")
        let kelvin = data.main.temp;
        let f = 9 / 5 * (kelvin - 273) + 32;
        temperature.innerHTML = `Current temperature: ${f.toFixed(0)}&#8457;`
        return temperature
    }

    function humidity(data) {
        let hum = document.createElement("p")
        hum.innerHTML = `Humidity: ${data.main.humidity}%`
        return hum
    }

    function image(data) {
        const icon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
        let img = document.createElement('img');
        img.setAttribute('src', icon);
        img.setAttribute('alt', "icon");
        img.setAttribute('loading', 'lazy');
        return img;
    }

    function day(specificDay) {
        let date = specificDay.dt_txt
        let x = date.split(" ")[0]
        let dateName = new Date(x).toLocaleString('en-US', { weekday: 'long' });

        let day = document.createElement("h4");
        day.innerHTML = dateName;
        return day;
    }

    function description(url) {
        let description = document.createElement("p")
        description.innerHTML = url.weather[0].description;
        return description
    }

    function choosingDay() {
        transportData().then(function(data) {
                const contentDiv = document.querySelector(".contentdiv");
                let array = [0, 10, 20]
                const { city } = data;
                if (contentDiv.children.length !== array.length) {
                    let title = document.createElement("h3");
                    title.innerHTML = `${city.name}, ${city.country}`
                    titleDiv.appendChild(title);
                    for (let i = 0; i < array.length; i++) {
                        let x = data.list[array[i]]
                        renderWeather(x)
                    }
                }
                input.value = ""
                    // console.log()
            })
            .catch(() => {
                msg.textContent = "Please search for a valid city 😩";
            });
    }

})

refresh.addEventListener("click", (e) => {
    // document.querySelector('.individual').remove();
    const contentDiv = document.querySelector(".contentdiv");
    const titleDiv = document.querySelector(".titlediv");
    titleDiv.innerHTML = "";
    contentDiv.innerHTML = "";

    console.log()
})