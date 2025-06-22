document.getElementById('get-weather').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'fe3e23a71ae94ba284790544252901';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert('City not found!');
            return;
        }

        const cityName = data.location.name;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;

        document.getElementById('city-name').innerText = cityName;
        document.getElementById('temperature').innerText = `${temperature}°C`;
        document.getElementById('condition').innerText = condition;
        document.getElementById('weather-icon').src = 'http:' + icon;

        document.getElementById('weather-info').style.display = 'block';
    } catch (error) {
        alert('Error fetching weather data!');
    }
}
