"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const document_1 = __importDefault(require("./models/document"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 4000;
const MONGO_URL = "mongodb+srv://Arjunroot:TsK6It1f4HvMdGwM@cluster0.scesfd7.mongodb.net/test";
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("New user connnected to the server.");
    socket.on("file-edited", (data) => {
        console.log("File edited ", data);
    });
    socket.on('get-document', documentId => {
        console.log('dockumet call');
        socket.emit('load-document', '');
    });
    socket.on('save-document', (document) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Save document event');
        let data = yield document_1.default.create({ data: document });
        console.log(data);
        console.log(document);
    }));
    socket.on("desconnect", () => {
        console.log("User desconnectd");
    });
});
mongoose_1.default.connect(MONGO_URL);
server.listen(PORT, () => {
    console.log("The server is listinging on the port", PORT);
});
