"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const documentSocket_1 = __importDefault(require("./socket/documentSocket"));
const server = http_1.default.createServer(app_1.default);
const PORT = 4000;
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
(0, documentSocket_1.default)(io);
server.listen(PORT, () => {
    console.log("The server is listinging on the port", PORT);
});
