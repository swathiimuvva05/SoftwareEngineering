// Main application logic and page interactions.
let devices = Storage.get("haven_devices", DEFAULT_DEVICES);
let automations = Storage.get("haven_automations", DEFAULT_AUTOMATIONS);
let settings = Storage.get("haven_settings", {homeName:"My Home",ownerName:"Swathi"});
let toastTimer;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const saveDevices = () => Storage.set("haven_devices", devices);
const saveAutomations = () => Storage.set("haven_automations", automations);
const roomNames = Object.keys(ROOM_INFO);

function notify(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function deviceIcon(type) { return DEVICE_ICONS[type] || "◉"; }
function deviceCard(device) {
  return `<article class="device-card">
    <div class="device-card-top"><div class="device-icon ${device.on ? "" : "off"}">${deviceIcon(device.type)}</div>
    <button class="toggle ${device.on ? "on" : ""}" data-toggle="${device.id}" aria-label="Turn ${device.on ? "off" : "on"} ${escapeHTML(device.name)}" aria-pressed="${device.on}"><span></span></button></div>
    <h3>${escapeHTML(device.name)}</h3><div class="device-meta"><span>${escapeHTML(device.room)}</span><span>${device.on ? "● Online" : "○ Offline"}</span></div>
    <div class="device-state">Status: <strong>${device.on ? "ON" : "OFF"}</strong></div>
  </article>`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function renderDevices() {
  $("#quickDevices").innerHTML = devices.slice(0,4).map(deviceCard).join("");
  const query = ($("#deviceSearch")?.value || "").toLowerCase();
  const room = $("#roomFilter")?.value || "all";
  const status = $("#statusFilter")?.value || "all";
  const filtered = devices.filter(d => d.name.toLowerCase().includes(query) &&
    (room === "all" || d.room === room) && (status === "all" || (status === "on" ? d.on : !d.on)));
  $("#allDevices").innerHTML = filtered.length ? filtered.map(deviceCard).join("") : '<p class="subheading">No devices match your filters.</p>';
  $("#deviceNavCount").textContent = devices.length;
  const online = devices.filter(d => d.on).length;
  $("#connectedStat").innerHTML = `${online} <small>/ ${devices.length}</small>`;
  bindToggles();
}
function bindToggles() {
  $$("[data-toggle]").forEach(button => button.addEventListener("click", () => {
    const device = devices.find(d => d.id === Number(button.dataset.toggle));
    if (!device) return;
    device.on = !device.on;
    saveDevices();
    renderAll();
    notify(`${device.name} turned ${device.on ? "on" : "off"}.`);
  }));
}
function renderRooms() {
  $("#roomsGrid").innerHTML = roomNames.map(room => {
    const roomDevices = devices.filter(d => d.room === room);
    return `<article class="room-card"><div class="room-card-head"><div class="room-big-icon">${ROOM_INFO[room].icon}</div><div><h3>${room}</h3><p>${ROOM_INFO[room].description}</p></div></div>
      <div class="device-meta" style="margin-top:15px"><span>${roomDevices.length} devices</span><span>${roomDevices.filter(d=>d.on).length} active</span></div>
      <div class="device-grid">${roomDevices.map(deviceCard).join("") || '<p class="subheading">No devices in this room.</p>'}</div></article>`;
  }).join("");
  bindToggles();
  $("#roomSummary").innerHTML = roomNames.map(room => {
    const list = devices.filter(d => d.room === room);
    return `<div class="room-row"><div class="room-symbol">${ROOM_INFO[room].icon}</div><div class="room-info"><strong>${room}</strong><small>${list.filter(d=>d.on).length} of ${list.length} devices active</small></div><span class="room-count">${list.length} devices</span></div>`;
  }).join("");
}
function renderAutomations() {
  $("#automationList").innerHTML = automations.length ? automations.map(item => `
    <div class="automation-item"><div class="routine-icon">⟳</div><div class="routine-details"><strong>${escapeHTML(item.name)}</strong><p>${escapeHTML(item.action)}</p></div><span class="routine-time">${escapeHTML(item.time)}</span>
    <button class="toggle ${item.enabled ? "on" : ""}" data-routine="${item.id}" aria-label="Toggle ${escapeHTML(item.name)}" aria-pressed="${item.enabled}"><span></span></button></div>`).join("") : '<p class="subheading">No routines yet. Create your first routine.</p>';
  $$("[data-routine]").forEach(button => button.addEventListener("click", () => {
    const routine = automations.find(a => a.id === Number(button.dataset.routine));
    routine.enabled = !routine.enabled;
    saveAutomations(); renderAutomations();
    notify(`${routine.name} ${routine.enabled ? "enabled" : "disabled"}.`);
  }));
}
function renderChart(targetId) {
  const target = $(targetId);
  if (!target) return;
  target.innerHTML = ENERGY_DATA.map((item,index) => `<div class="bar-wrap"><div class="bar ${index===6?"today":""}" style="height:${item.value/9*100}%"></div><span class="bar-label">${item.day}</span></div>`).join("");
}
function renderAll() {
  renderDevices(); renderRooms(); renderAutomations();
  renderChart("#energyChart"); renderChart("#energyChartLarge");
}
function navigate(page) {
  $$(".page").forEach(section => section.classList.remove("active-page"));
  const target = $(`#${page}Page`);
  if (target) target.classList.add("active-page");
  $$(".nav-link[data-page]").forEach(link => link.classList.toggle("active", link.dataset.page === page));
  $("#pageCrumb").textContent = page.charAt(0).toUpperCase()+page.slice(1).replace("energy","Energy usage");
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$(".nav-link[data-page]").forEach(link => link.addEventListener("click", () => navigate(link.dataset.page)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
$("#deviceSearch").addEventListener("input", renderDevices);
$("#roomFilter").addEventListener("change", renderDevices);
$("#statusFilter").addEventListener("change", renderDevices);
$("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("haven_dark", document.body.classList.contains("dark") ? "1" : "0");
});
if (localStorage.getItem("haven_dark") === "1") document.body.classList.add("dark");

$("#addDeviceBtn").addEventListener("click", () => $("#deviceModal").showModal());
$("#deviceForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#newDeviceName").value.trim();
  if (!name) return;
  devices.push({id:Date.now(),name,type:$("#newDeviceType").value,room:$("#newDeviceRoom").value,on:false,detail:"New device"});
  saveDevices(); renderAll(); $("#deviceModal").close(); event.target.reset(); notify(`${name} added successfully.`);
});
$("#addAutomationBtn").addEventListener("click", () => $("#automationModal").showModal());
$("#automationForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#routineName").value.trim();
  if (!name) return;
  automations.push({id:Date.now(),name,time:$("#routineTime").value,action:$("#routineAction").value,enabled:true});
  saveAutomations(); renderAutomations(); $("#automationModal").close(); event.target.reset(); notify("Automation routine created.");
});
$("#saveSettings").addEventListener("click", () => {
  settings = {homeName:$("#homeName").value.trim() || "My Home",ownerName:$("#ownerName").value.trim() || "Home Owner"};
  Storage.set("haven_settings",settings); notify("Settings saved.");
});
$("#resetData").addEventListener("click", () => {
  if (!confirm("Reset all device, automation and settings data to the original demo values?")) return;
  Storage.clear(); devices = DEFAULT_DEVICES.map(d=>({...d})); automations = DEFAULT_AUTOMATIONS.map(a=>({...a}));
  settings = {homeName:"My Home",ownerName:"Swathi"};
  $("#homeName").value=settings.homeName; $("#ownerName").value=settings.ownerName;
  renderAll(); notify("Demo data has been reset.");
});
$("#homeName").value = settings.homeName;
$("#ownerName").value = settings.ownerName;
$("#todayLabel").textContent = new Intl.DateTimeFormat("en-IN",{weekday:"long",month:"long",day:"numeric"}).format(new Date()).toUpperCase();
renderAll();
