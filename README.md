# Haven – Smart Home Management System

A responsive front-end academic project that demonstrates how a user could monitor and manage smart-home devices from one dashboard.

## Features
- Dashboard with device, energy, temperature and security summaries
- Add devices and switch devices ON/OFF
- Search devices and filter by room or status
- Room-wise device overview
- Create, enable and disable automation routines
- Sample weekly energy chart and estimated cost
- Light/dark theme
- Browser `localStorage` persistence
- Responsive layout for desktop, tablet and mobile

## Technologies
- HTML5 – page structure
- CSS3 – responsive styling and layout
- JavaScript – UI interactions, filtering, simulated device controls and browser storage

## How to run in VS Code
1. Extract the project ZIP file.
2. Open the `Smart-Home-Management-System` folder in Visual Studio Code.
3. Open `index.html`.
4. Right-click inside the file and choose **Open with Live Server** (if the Live Server extension is installed).
5. You can also open `index.html` directly in a browser.

No backend, database, package installation or build step is required for this demo.

## Project structure
```text
Smart-Home-Management-System/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── storage.js
│   └── app.js
└── docs/
    └── PROJECT_REPORT.md
```

## Important project scope
This submission is a browser-based prototype. Device states, automation routines and settings are simulated and saved in the browser using `localStorage`. The energy values are sample data. It does **not** connect to real appliances, sensors, smart meters, Wi-Fi devices or security hardware. Real hardware integration would require suitable IoT devices (for example, ESP32), a backend/API and secure communication.

## Testing checklist
- [ ] Dashboard opens without console errors.
- [ ] Device toggle changes ON/OFF state.
- [ ] Refresh the page and confirm device state remains saved.
- [ ] Add a device and check it appears in Devices and Rooms.
- [ ] Search and filter devices.
- [ ] Add an automation routine and toggle it.
- [ ] Change theme and test mobile layout.
- [ ] Reset demo data and confirm default values return.

## Customization
- Edit sample devices and automation defaults in `js/data.js`.
- Edit colors, spacing and responsive breakpoints in `css/style.css`.
- Add application behavior in `js/app.js`.
- Browser storage helpers are in `js/storage.js`.

## Academic note
Use this README and the project report as a starting point. Review the source code and be ready to explain the purpose of each file and the difference between a simulated front-end prototype and a real IoT smart-home system.
