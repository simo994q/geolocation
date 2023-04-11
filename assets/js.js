
let pos = document.getElementById('pos')

navigator.geolocation.getCurrentPosition(showPosition);


function showPosition(position) {
        let URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`

        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log('my fetched data:', data);
            showData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


function showData (myData) {
    console.log(myData);
    let address = myData.address
    pos.innerText = `Din addresse er ${address.road} ${address.house_number}, ${address.city} ${address.postcode}`
};