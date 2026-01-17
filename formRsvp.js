const button = document.getElementById('submit');
const name = document.getElementById('text');
const guests = document.getElementById('number');

button.onclick = () => {
    console.log("test", {name: name.value, guests: guests.value})
    umami.track('testing sub', {name: name.value, guests: guests.value});
}