// Sample data used by the Smart Home Management System.
const DEFAULT_DEVICES = [
  {id:1,name:"Ceiling Light",type:"light",room:"Living Room",on:true,detail:"Brightness 80%"},
  {id:2,name:"Smart TV",type:"tv",room:"Living Room",on:false,detail:"Standby mode"},
  {id:3,name:"Air Conditioner",type:"climate",room:"Bedroom",on:true,detail:"Temperature 24°C"},
  {id:4,name:"Bedside Lamp",type:"light",room:"Bedroom",on:true,detail:"Warm white"},
  {id:5,name:"Kitchen Light",type:"light",room:"Kitchen",on:false,detail:"Brightness 60%"},
  {id:6,name:"Smart Plug",type:"plug",room:"Kitchen",on:true,detail:"Connected appliance"},
  {id:7,name:"Door Sensor",type:"security",room:"Living Room",on:true,detail:"Door is closed"},
  {id:8,name:"Study Lamp",type:"light",room:"Study Room",on:false,detail:"Brightness 100%"}
];
const DEFAULT_AUTOMATIONS = [
  {id:1,name:"Good morning",time:"07:00",action:"Turn on selected lights",enabled:true},
  {id:2,name:"Away mode",time:"09:00",action:"Turn off all devices",enabled:false},
  {id:3,name:"Evening comfort",time:"18:30",action:"Set comfort temperature",enabled:true}
];
const ROOM_INFO = {
  "Living Room":{icon:"▣",description:"Relax, entertain and connect"},
  "Bedroom":{icon:"▤",description:"Your personal comfort zone"},
  "Kitchen":{icon:"♨",description:"The heart of your home"},
  "Study Room":{icon:"▧",description:"Focus and productivity"}
};
const DEVICE_ICONS = {light:"☼",tv:"▣",climate:"❄",plug:"ϟ",security:"⌑"};
const ENERGY_DATA = [{day:"Mon",value:5.2},{day:"Tue",value:6.4},{day:"Wed",value:4.8},{day:"Thu",value:7.1},{day:"Fri",value:5.6},{day:"Sat",value:8.1},{day:"Sun",value:5.6}];
