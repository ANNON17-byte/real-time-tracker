const socket = io();

const map = L.map("map").setView([0, 0], 13);

let myLocation = null;


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Real time Location Sharing App",
}).addTo(map);

const markers = {};
let firstUpdate = true;

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            myLocation = { latitude, longitude }; 

            socket.emit("send-location", { latitude, longitude });
        },
        (error) => console.log(error),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 1000,
        }
    );
}

socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    if (firstUpdate) {
        map.setView([latitude, longitude], 15);
        firstUpdate = false;
    }

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }

    if (myLocation && id !== socket.id) {
        const dist = getDistance(
            myLocation.latitude,
            myLocation.longitude,
            latitude,
            longitude
        );

        markers[id].bindPopup(
            `Distance: ${dist.toFixed(2)} km`
        );
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; 
}



