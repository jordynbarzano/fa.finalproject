let map;
let markers = {};
let activeMarker = null;
let currentExpandedYearGroup = null;

function initMap() {
    // Initialize map centered on USA
    map = L.map('map', {
        maxBounds: [
            [25, -130],
            [50, -65]
        ],
        maxBoundsViscosity: 1.0
    }).setView([37.8, -96.9], 4);
    
    // Add OpenStreetMap base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 10,
        minZoom: 3
    }).addTo(map);
    
    // Group data by stadium
    const stadiumsGrouped = {};
    stadiumsData.forEach(record => {
        if (!stadiumsGrouped[record.name]) {
            stadiumsGrouped[record.name] = {
                name: record.name,
                location: record.location,
                latitude: record.latitude,
                longitude: record.longitude,
                years: []
            };
        }
        stadiumsGrouped[record.name].years.push(record.year);
    });
    
    // Create markers for each stadium with labels
    const stadiumsArray = Object.values(stadiumsGrouped);
    stadiumsArray.forEach(stadium => {
        const marker = L.circleMarker(
            [stadium.latitude, stadium.longitude],
            {
                radius: 8,
                fillColor: '#ff1493',
                color: '#b30f66',
                weight: 3,
                opacity: 0.95,
                fillOpacity: 0.95
            }
        ).addTo(map);
        
        // (Permanent labels removed to reduce clutter)
        
        // Create popup content with stadium info and years - BOLD TEXT
        const yearsString = stadium.years.join(', ');
        const popupContent = `
            <div class="popup-content">
                <strong>${stadium.name}</strong>.<br>
                <em>${stadium.location}.</em><br>
                <small><strong>Years Hosted:</strong> ${yearsString}.</small>
            </div>
        `;
        
        // Create hover tooltip
        const tooltipContent = `${stadium.location}`;
        
        marker.bindPopup(popupContent);
        marker.bindTooltip(tooltipContent, {
            permanent: false,
            direction: 'top',
            offset: [0, -10],
            className: 'stadium-tooltip'
        });
        
        marker.on('click', function() {
            if (activeMarker && activeMarker !== marker) {
                activeMarker.setStyle({
                    radius: 8,
                    fillColor: '#ff1493',
                    color: '#b30f66'
                });
            }
            activeMarker = marker;
        });
        
        // Highlight on hover
        marker.on('mouseover', function() {
            this.setStyle({
                radius: 11,
                fillColor: '#ff77b6',
                color: '#ff2288'
            });
        });
        
        marker.on('mouseout', function() {
            if (this !== activeMarker) {
                this.setStyle({
                    radius: 8,
                    fillColor: '#ff1493',
                    color: '#b30f66'
                });
            }
        });
        
        markers[stadium.name] = marker;
    });
    
    // Create legend/key
    const legend = document.createElement('div');
    legend.className = 'legend-key';
    legend.innerHTML = `
        <h4>Map Legend</h4>
        <div class="legend-item">
            <div class="legend-dot"></div>
            <span><strong>Stadium</strong></span>
        </div>
        <div class="legend-item" style="margin-top: 10px; font-size: 0.85em; color: #666;">
            Total Stadiums: <strong>${stadiumsArray.length}</strong>
        </div>
    `;
    map._container.appendChild(legend);
    
    // Build timeline sidebar
    buildTimeline();
}

function buildTimeline() {
    // Build a minimal timeline: only the compact year-picker buttons.
    // The large year-group boxes and city lists are intentionally omitted
    // to keep the UI compact while preserving all functionality.
    const yearsByYear = {};

    // Group stadium names by year
    stadiumsData.forEach(record => {
        if (!yearsByYear[record.year]) yearsByYear[record.year] = [];
        if (!yearsByYear[record.year].includes(record.name)) yearsByYear[record.year].push(record.name);
    });

    const sortedYears = Object.keys(yearsByYear).map(Number).sort((a, b) => a - b);
    const picker = document.getElementById('year-picker');
    picker.innerHTML = '';

    sortedYears.forEach(year => {
        const btn = document.createElement('button');
        btn.className = 'year-button';
        btn.textContent = year;

        btn.addEventListener('click', function() {
            // Open the first stadium for this year (preserves original behaviour of showing a stadium popup)
            const names = yearsByYear[year] || [];
            if (names.length > 0) {
                const firstName = names[0];
                const marker = markers[firstName];
                if (marker) {
                    if (activeMarker && activeMarker !== marker) {
                        try { activeMarker.closePopup(); } catch (e) {}
                        activeMarker.setStyle({ radius: 8, fillColor: '#ff1493', color: '#b30f66' });
                    }
                    marker.openPopup();
                    marker.setStyle({ radius: 11, fillColor: '#ff77b6', color: '#ff2288' });
                    activeMarker = marker;
                    map.panTo(marker.getLatLng());
                }
            }

            // Manage active button UI and ensure visibility
            document.querySelectorAll('.year-button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', inline: 'center' }), 50);
        });

        picker.appendChild(btn);
    });

    // Hide the (now unused) expanded timeline container if it exists
    const timeline = document.getElementById('timeline');
    if (timeline) timeline.style.display = 'none';
}
