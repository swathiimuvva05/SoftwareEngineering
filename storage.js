// Handles browser storage. This is a front-end demo, not a real IoT database.
const Storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn("Could not read saved data:", error);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("Could not save data:", error);
    }
  },
  clear() {
    ["haven_devices", "haven_automations", "haven_settings"].forEach(key => localStorage.removeItem(key));
  }
};
