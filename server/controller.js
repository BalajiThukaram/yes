const hall = require("./hall");
const room = require("./room");
const kitchen = require("./kitchen");
const sequelize = require("./dbconn");
const hello = (request, response) => {
  return "hello world";
};
// xxg
const hallData = async (request, reply) => {
  const data = await hall.dataFromHall();
  console.log(data);
  return reply(data);
};

const roomData = async (request, reply) => {
  const data = await room.dataFromRoom();
  return reply(data);
};

const kitchenData = async (request, reply) => {
  const data = await kitchen.dataFromKitchen();
  return reply(data);
};

const recentHall = async (request, reply) => {
  const data = await hall.recentHall();
  return reply(data);
};
const recentKitchen = async (request, reply) => {
  const data = await kitchen.recentKitchen();
  return reply(data);
};
const recentRoom = async (request, reply) => {
  const data = await room.recentRoom();
  return reply(data);
};

const recentMotion = async (request, reply) => {
  try {
    const result = await sequelize.query(`SELECT *
    FROM eldercare
    ORDER BY created_date DESC, created_time DESC
    LIMIT 1;`,
    { type: sequelize.QueryTypes.SELECT });
    return reply(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  hello,
  hallData,
  roomData,
  kitchenData,
  recentHall,
  recentKitchen,
  recentRoom,
  recentMotion
};
