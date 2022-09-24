const API_KEY = '9846de5a91553cc8b14a019fa3241ffa';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].description,
        humidity: data.main.humidity + ' %',
        pressure: data.main.pressure + ' hPa',
        temperature: data.main.temp + ' C°',
        date: getDate(),
    }

    //Itera weatherData y devuelve las key, es decir: location, description, etc...
    Object.keys(weatherData).forEach( key => {
        //Settear info en index.html
        document.getElementById(key).textContent = weatherData[key];
    });

    cleanUp();
}

//Intercambio entre el loader y el contenido
const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
}

const getDate = () => {
    let date = new Date();
    //getMonth()+1 -> porque arranca en 0
    //slice(-2) -> para que si el mes es de dos digitos no agregue el 0 adelante
    return `${date.getDate()}-${('0' + (date.getMonth()+1)).slice(-2)}-${date.getFullYear()}`;
}

const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}