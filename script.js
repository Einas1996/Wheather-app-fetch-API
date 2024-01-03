const apiKey = '7264d6c5c33bf7c24019cbcf95f89b4c';

async function getWeatherInfo() {
    const countryInput = document.getElementById('countryInput').value;
    const weatherInfoElement = document.getElementById('weatherInfo');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryInput}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
            const cityName = data.name;

            weatherInfoElement.innerHTML = `
                <p>Weather in ${cityName}: ${weatherDescription}</p>
                <p>Temperature: ${temperature} °C</p>
            `;
        } else {
            weatherInfoElement.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoElement.innerHTML = '<p>Error fetching weather data</p>';
    }
}
