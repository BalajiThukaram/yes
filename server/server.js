const Hapi = require("hapi");
const sequelize = require("./dbconn.js");
const routes = require("./routes.js");
const server = new Hapi.Server()
server.connection({
  port: 8000,
  host: "localhost",
})

server.route(routes);
server.start();

console.log("Server running on %s", server.info.uri);

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
