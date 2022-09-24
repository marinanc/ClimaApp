const API_KEY = '9846de5a91553cc8b14a019fa3241ffa';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
    console.log(position);
}
const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}