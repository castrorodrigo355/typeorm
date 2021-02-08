import "reflect-metadata";
// import { createConnection } from "typeorm";
// import dotEnv from "dotenv";
// dotEnv.config();

import Server from "./server";
const server = Server.init(Number(4000))
// createConnection();

server.start(() => {
    console.log("Server working on port: " + server.port)
})
