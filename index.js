
const log = position => {
    console.log(position);
}
const onload = () => {
    navigator.geolocation.getCurrentPosition(log);
}