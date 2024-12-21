const map = L.map('map').setView([23.2108, 72.6877], 18);


 // Add OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { 
        name: 'Library', 
        coords: [23.2150, 72.6839], 
        info: 'Central Library of IITGN', 
        image: "./assets/images/dog.jpg" 
    },
    { 
        name: 'Boys Hostel Block A', 
        coords: [23.2139, 72.6851], 
        info: 'Hostel for undergraduate students', 
        image: "./assets/images/dog.jpg" 
    },
    { 
        name: 'Girls Hostel', 
        coords: [23.2148, 72.6862], 
        info: 'Accommodation for female students', 
        image: "./assets/images/dog.jpg" 
    },
    { 
        name: 'Main Academic Block', 
        coords: [23.2146, 72.6834], 
        info: 'Academic hub of the institute', 
        image: "./assets/images/dog.jpg" 
    },
    { 
        name: 'Sports Complex', 
        coords: [23.2135, 72.6820], 
        info: 'Sports facilities including a gym and courts', 
        image: "./assets/images/dog.jpg" 
    }
];

// Add markers with popups
locations.forEach(loc => {
    L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`
            <div class="popup-content">
                <img src="${loc.image}" alt="${loc.name}" style="width: 200px; height: 200px; object-fit: cover;">
                <b>${loc.name}</b><br>
                ${loc.info}
            </div>
        `);
});



// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const location = locations.find(loc => loc.name.toLowerCase().includes(query));
    if (location) {
        map.setView(location.coords, 18); // Zoom to the location
        L.popup()
            .setLatLng(location.coords)
            .setContent(`
                <div class="popup-content">
                    <img src="${location.image}" alt="${location.name}">
                    <b>${location.name}</b><br>
                    ${location.info}
                </div>
            `)
            .openOn(map);
    }
});