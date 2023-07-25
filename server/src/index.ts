import { Server, Socket } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const PORT = 4000;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  console.log("New user connnected to the server.");

  socket.on("file-edited", (data) => {
    console.log("File edited ", data);
  });

  socket.on('get-document', documentId => {
    console.log('dockumet call')
    socket.emit('load-document', '')
  });

  socket.on('save-document', document => {
    console.log( document)
  })
  
  socket.on("desconnect", () => {
    console.log("User desconnectd");
  });
});

server.listen(PORT, () => {
  console.log("The server is listinging on the port", PORT);
});
