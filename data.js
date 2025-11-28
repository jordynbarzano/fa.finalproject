// Load stadium data from JSON
let stadiumsData = [];

async function loadData() {
    try {
        const response = await fetch('data.json');
        stadiumsData = await response.json();
        console.log(`Loaded ${stadiumsData.length} stadium records`);
        initMap();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

loadData();
