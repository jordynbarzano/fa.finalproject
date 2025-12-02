# Super Bowl Stadiums Project 🏈

An interactive web application that visualizes Super Bowl host stadiums from 1967–2016, combining web scraping, database design, and interactive mapping.

## 🎯 Project Overview

This project demonstrates the complete data pipeline:
- **Web Scraping:** Extract stadium data from Wikipedia
- **Database Design:** Normalize data into SQLite with relational schema
- **SQL Queries:** Generate insights from structured data
- **Interactive Web App:** Visualize findings with Leaflet.js map

## 🗺️ Live Application

**[View the Interactive Map](https://jordynbarzano.github.io/fa.finalproject/)**

## 📋 Project Documentation

The full project report (including all required sections) is available at **[project-report.html](project-report.html)**

### Documentation Sections:
1. **Overview** - Objective and key insights
2. **Web Scraping** - Wikipedia data extraction with code example
3. **Database Design** - Schema, tables, and SQL queries
4. **Web Application** - Features and usage guide
5. **Requirements Met** - Checklist of project criteria

## 📊 Data Summary

| Metric | Value |
|--------|-------|
| **Years Covered** | 1967–2016 (50 years) |
| **Unique Stadiums** | 27 |
| **Total Records** | 50 (year-stadium pairs) |
| **Data Source** | Wikipedia ("List of Super Bowl host cities") |
| **Database** | SQLite (host_stadiums.db) |

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Mapping:** Leaflet.js v1.9.4 + OpenStreetMap
- **Database:** SQLite3
- **Data Format:** JSON, CSV

## 📁 Project Structure

```
fa.finalproject/
├── index.html                 # Interactive map application
├── project-report.html        # Full project documentation (LANDING PAGE)
├── styles.css                 # Styling for both pages
├── map.js                      # Leaflet map implementation
├── data.js                     # JSON data loader
├── data.json                   # Exported stadium data
├── host_stadiums.db           # SQLite database
├── host_stadiums.csv          # Source data (Wikipedia export)
├── queries.sql                # Example SQL queries
└── README.md                  # This file
```

## 🚀 Getting Started

### View Online
Simply visit the live application: [GitHub Pages Link](https://jordynbarzano.github.io/fa.finalproject/)

### Run Locally
```bash
# Navigate to project directory
cd fa.finalproject

# Start a Python HTTP server
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

## 💡 Key Features

- **Interactive Year Picker:** Click any year (1967–2016) to highlight that Super Bowl's venue
- **Location Popups:** Click markers to see stadium details and all years hosted
- **Geographic Clustering:** Visualize how Super Bowl venues concentrate in warm-weather states
- **Responsive Design:** Works on desktop and mobile devices
- **No Framework:** Built with vanilla JavaScript for maximum clarity

## 📈 Insights from Data

1. **Geographic Concentration:** 80% of Super Bowls held in 6 states (FL, CA, AZ, LA, TX, GA)
2. **Most Frequent Venues:** Caesars Superdome (8x), Rose Bowl (5x), Hard Rock Stadium (5x)
3. **Regional Preference:** Warm-weather cities dominate (Miami, New Orleans, Pasadena)
4. **Stadium Evolution:** Dataset tracks 50 years of venue development and renovation

## 🧪 Database Queries

### Example: Count by Stadium
```sql
SELECT s.name, s.location, COUNT(sy.year) AS times_hosted
FROM stadiums s
INNER JOIN stadium_years sy ON s.id = sy.stadium_id
WHERE sy.year >= 1967 AND sy.year <= 2016
GROUP BY s.id
ORDER BY times_hosted DESC;
```

### Example: Geographic Summary
```sql
SELECT s.location, COUNT(sy.year) AS total_hosted
FROM stadiums s
INNER JOIN stadium_years sy ON s.id = sy.stadium_id
WHERE sy.year >= 1967 AND sy.year <= 2016
GROUP BY s.location
ORDER BY total_hosted DESC;
```

## 👤 Author

**Jordyn Barzano**

- GitHub: [@jordynbarzano](https://github.com/jordynbarzano)
- Project: [fa.finalproject](https://github.com/jordynbarzano/fa.finalproject)

## 📜 License

This project is for educational purposes.

## 📝 Academic Integrity

This project demonstrates:
- ✅ Web scraping from public sources
- ✅ Relational database design
- ✅ SQL query writing
- ✅ Interactive web application development
- ✅ Original work with clear documentation

---

**For the complete project report with all requirements, please see [project-report.html](project-report.html)**