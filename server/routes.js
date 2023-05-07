const controller = require("./controller");
const alertController = require("./alertController")
const routes = [
  {
    method: "GET",
    path: "/hall",
    handler: controller.hello,
  },
  {
    method: "GET",
    path: "/api/hall/all",
    handler: controller.hallData,
  },
  {
    method: "GET",
    path: "/api/room/all",
    handler: controller.roomData,
  },
  {
    method: "GET",
    path: "/api/kitchen/all",
    handler: controller.kitchenData,
  },
  {
    method:'POST',
    path:"/api/sms/caretaker",
    handler: alertController.caretakerSms,
  },
  {
    method:'POST',
    path:"/api/send/emergency",
    handler: alertController.emergencySms,
  },
  {
    method:['GET'],
    path:"/api/mail",
    handler: (request,reply)=>{
      reply ("hi")
    }
  },
  { 
    method:'POST',
    path:"/api/mail/care",
    handler: alertController.mailCare,
  },
  { 
    method:'POST',
    path:"/api/mail/emailhospi",
    handler: alertController.mailHospi,
  },
  {
    method:"GET",
    path:"/api/recent",
    handler:controller.recentMotion,
  },
  {
    method:"GET",
    path:"/api/recent/hall",
    handler:controller.recentHall,
  },
  {
    method:"GET",
    path:"/api/recent/kitchen",
    handler:controller.recentKitchen,
  },
  {
    method:"GET",
    path:"/api/recent/room",
    handler:controller.recentRoom,
  }
];
module.exports = routes;
