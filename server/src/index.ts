import { Server, Socket } from "socket.io";
import http from "http";
import app from './app';
import documentSocket from "./socket/documentSocket";


const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

documentSocket(io);

server.listen(PORT, () => {
  console.log("The server is listinging on the port", PORT);
});
