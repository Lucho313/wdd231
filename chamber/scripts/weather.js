const apiKey = "343086e72ba163738560d647a54e1efc";

const lat = "-23.5505";
const lon = "-46.6333";

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(currentURL);

    const data = await response.json();

    document.querySelector("#current-temp").textContent =
    `${Math.round(data.main.temp)}°C`;

    document.querySelector("#weather-desc").textContent =
    data.weather[0].description;
}

async function getForecast() {

    const response = await fetch(forecastURL);

    const data = await response.json();

    const forecastContainer =
    document.querySelector("#forecast");

    const filteredData =
    data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    filteredData.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const p = document.createElement("p");

        p.textContent =
        `${date.toLocaleDateString('en-US', {
            weekday: 'short'
        })}: ${Math.round(day.main.temp)}°C`;

        forecastContainer.appendChild(p);
    });
}

getWeather();
getForecast();