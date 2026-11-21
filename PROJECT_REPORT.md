# SMART HOME MANAGEMENT SYSTEM
## Mini Project Documentation

### 1. Introduction
The Smart Home Management System is a responsive web application prototype designed to provide a centralized interface for monitoring and managing household devices. The dashboard allows a user to view device states, organize devices by room, create sample automation routines and review illustrative energy-consumption information.

### 2. Problem Statement
In a conventional home, appliances are controlled separately and users may not have a single place to view their status. This project demonstrates a unified interface that organizes common smart-home controls in one application.

### 3. Objectives
- Design a clean and easy-to-use home dashboard.
- Display connected devices and their ON/OFF states.
- Organize devices according to rooms.
- Demonstrate simple automation routine management.
- Present sample energy-consumption information.
- Store user changes in the browser for a continuous demo experience.

### 4. Scope
The current implementation is a front-end prototype. It simulates device operations in the browser. It does not communicate with physical appliances or sensors. Actual IoT functionality can be introduced in a future version using microcontrollers, sensors, a server/API and a database.

### 5. Technologies Used
| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic content |
| CSS3 | Styling, layout and responsive design |
| JavaScript | Application logic and interactions |
| localStorage | Saving demo data in the browser |
| Visual Studio Code | Development environment |

### 6. Modules
1. **Overview:** Displays summary cards, quick device controls, room summary and weekly sample energy chart.
2. **Device Management:** Displays devices, allows ON/OFF simulation, adding a device, searching and filtering.
3. **Room Management:** Groups devices into Living Room, Bedroom, Kitchen and Study Room.
4. **Automation:** Allows the user to create routines and enable or disable them.
5. **Energy Usage:** Shows sample energy consumption and an illustrative cost estimate.
6. **Settings:** Saves home profile details and provides a reset option.

### 7. System Requirements
**Hardware:** A computer or laptop capable of running a modern web browser.

**Software:** Windows/macOS/Linux, Visual Studio Code, and a modern browser such as Chrome, Edge or Firefox. Live Server extension is recommended but not compulsory.

### 8. Working Procedure
1. The browser loads `index.html`.
2. The HTML file loads `css/style.css` for presentation.
3. The HTML file loads `js/data.js`, `js/storage.js` and `js/app.js`.
4. `data.js` contains the initial sample devices, rooms and routines.
5. `storage.js` reads and writes application data using browser localStorage.
6. `app.js` renders the dashboard and handles navigation, device toggles, filtering, room views, automation forms and settings.
7. When the user changes a device or routine, JavaScript updates the data and saves it in localStorage.

### 9. Advantages
- Centralized view of home devices.
- Simple navigation and responsive interface.
- Easy-to-understand device and room organization.
- User changes remain available after refreshing the same browser.
- Modular files make the project easier to maintain.

### 10. Limitations
- Device operations are simulated, not physical.
- Energy consumption is sample data, not a live meter reading.
- There is no user authentication or cloud synchronization.
- Data is stored only in the current browser.
- Automation routines are saved as rules but are not executed by a scheduler.

### 11. Future Enhancements
- Integrate ESP32 or other IoT controllers.
- Connect real sensors, smart bulbs, relays and smart plugs.
- Build a backend using Java Spring Boot or Node.js.
- Add a database for users, devices, rooms and energy history.
- Add authentication, authorization and secure device communication.
- Display live sensor readings and execute scheduled automations.

### 12. Conclusion
The Smart Home Management System demonstrates the front-end design and basic interaction flow of a centralized smart-home application. It uses HTML, CSS and JavaScript to provide device management, room organization, automation setup and sample energy monitoring. The prototype provides a foundation for future development with real IoT hardware and backend services.

### 13. Suggested Demonstration
During project review, demonstrate the dashboard, switch a device ON/OFF, add a new device, filter the device list, create and disable an automation routine, switch the theme and refresh the browser to show that data persists.
