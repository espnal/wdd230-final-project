const myKey = "318b4d20506cf8ad502829d2accf0043"
const url = `https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=${myKey}`;
// toggle the hamburger----------------------------------------------
function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;
// ----------------------------------------------------------------------

// Last Modification ----------------------------------------
const field = document.querySelector(".time");

field.innerHTML = `Last Modification: ${document.lastModified}`;

// -----------------------------------------------------------
fetch(url)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);
        const iconsrc = `https://openweathermap.org/img/wn/${jsonObject.weather[0].icon}.png`
        const currentTemperature = document.querySelector('.current-temperature').textContent = jsonObject.main.temp.toFixed(0);
        const desc = jsonObject.weather[0].description;
        const name = document.querySelector('.name-city').innerHTML = jsonObject.name;
        const humidity = document.querySelector(".humidity").innerHTML = jsonObject.main.humidity
        document.querySelector('.weathericon').setAttribute('src', iconsrc);
        document.querySelector('.weathericon').setAttribute('alt', desc);
        document.querySelector('.condition-description').textContent = desc;
    })


const form = document.querySelector("#form-1");
const input = document.querySelector("#form-1 input");
const msg = document.querySelector(".msg");

const titleDiv = document.querySelector(".titlediv");
const contentDiv = document.querySelector(".contentdiv");
const refresh = document.querySelector("#refresh");


function firstItemF(list, city) {
    let firstItem = list[0]
    let dayweather = "Sunday"
    const icon = `https://openweathermap.org/img/wn/${firstItem.weather[0]["icon"]}@2x.png`;

    let individualDiv = document.createElement("Div")
    individualDiv.className = "individual"

    let description = document.createElement("p")
    description.innerHTML = firstItem.weather[0].description;

    let day = document.createElement("h4")
    day.innerHTML = dayweather

    let temperature = document.createElement("p")
    let kelvin = firstItem.main.temp.toFixed(0);
    let f = 9 / 5 * (kelvin - 273) + 32;
    temperature.innerHTML = `Current temperature: ${f}&#8457;`

    let hum = document.createElement("p")
    hum.innerHTML = `${firstItem.main.humidity}%`

    let img = document.createElement('img');
    img.setAttribute('src', icon);
    img.setAttribute('alt', "icon");
    img.setAttribute('loading', 'lazy');

    individualDiv.appendChild(img);


    individualDiv.appendChild(day);
    individualDiv.appendChild(description);
    individualDiv.appendChild(temperature);
    individualDiv.appendChild(hum);
    contentDiv.appendChild(individualDiv);

}

function SecondItemF(list, city) {
    let SecondItem = list[2]
    let dayweather = "Monday"
    const icon = `https://openweathermap.org/img/wn/${SecondItem.weather[0]["icon"]}@2x.png`;

    let individualDiv = document.createElement("Div")
    individualDiv.className = "individual"

    let description = document.createElement("p")
    description.innerHTML = SecondItem.weather[0].description;

    let day = document.createElement("h4")
    day.innerHTML = dayweather

    let temperature = document.createElement("p")
    let kelvin = SecondItem.main.temp;
    let f = 9 / 5 * (kelvin - 273) + 32;
    temperature.innerHTML = `Current temperature: ${f.toFixed(0)}&#8457;`

    let hum = document.createElement("p")
    hum.innerHTML = `${SecondItem.main.humidity}%`

    let img = document.createElement('img');
    img.setAttribute('src', icon);
    img.setAttribute('alt', "icon");
    img.setAttribute('loading', 'lazy');

    individualDiv.appendChild(img);
    individualDiv.appendChild(day);
    individualDiv.appendChild(description);
    individualDiv.appendChild(temperature);
    individualDiv.appendChild(hum);

    contentDiv.appendChild(individualDiv);

}

function ThirdItemF(list, city) {
    let ThirdItem = list[10]
    let dayweather = "Tuesday"
    const icon = `https://openweathermap.org/img/wn/${ThirdItem.weather[0]["icon"]}@2x.png`;

    let individualDiv = document.createElement("Div")
    individualDiv.className = "individual"

    let description = document.createElement("p")
    description.innerHTML = ThirdItem.weather[0].description;

    let day = document.createElement("h4")
    day.innerHTML = dayweather

    let temperature = document.createElement("p")
    let kelvin = ThirdItem.main.temp;
    let f = 9 / 5 * (kelvin - 273) + 32;
    temperature.innerHTML = `Current temperature: ${f.toFixed(0)}&#8457;`

    let hum = document.createElement("p")
    hum.innerHTML = `${ThirdItem.main.humidity}%`

    let img = document.createElement('img');
    img.setAttribute('src', icon);
    img.setAttribute('alt', "icon");
    img.setAttribute('loading', 'lazy');

    individualDiv.appendChild(img);
    individualDiv.appendChild(day);
    individualDiv.appendChild(description);
    individualDiv.appendChild(temperature);
    individualDiv.appendChild(hum);

    contentDiv.appendChild(individualDiv);

}


form.addEventListener("submit", e => {
    e.preventDefault();

    const inputVal = input.value;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${myKey}`;
    fetch(urlForecast)
        .then((response) => response.json())
        .then((object) => {
            console.log(object);
            const { city, list } = object;

            let title = document.createElement("h3");
            title.innerHTML = `${city.name}, ${city.country}`
            titleDiv.appendChild(title);
            firstItemF(list, city)
            SecondItemF(list, city)
            ThirdItemF(list, city)


        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });
    msg.textContent = "";
    form.reset();
    input.focus();

})


refresh.addEventListener("click", (e) => {
        // document.querySelector('.individual').remove();
        console.log(e.target.parentNode)
    })
    // --------------------------------temple inf------------------------------------------