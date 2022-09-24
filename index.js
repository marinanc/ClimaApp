const API_KEY = '9846de5a91553cc8b14a019fa3241ffa';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: 'date',
    }

    //Itera weatherData y devuelve las key, es decir: location, description, etc...
    Object.keys(weatherData).forEach( key => {
        //Settear info en index.html
        document.getElementById(key).textContent = weatherData[key];
    });
}

const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}