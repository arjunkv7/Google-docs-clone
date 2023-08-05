import { Server, Socket } from "socket.io";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import Doc from './models/document'


const app = express();
const server = http.createServer(app);

const PORT = 4000;
const MONGO_URL = "mongodb+srv://Arjunroot:TsK6It1f4HvMdGwM@cluster0.scesfd7.mongodb.net/test"

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

  socket.on('save-document',async  document => {
    console.log('Save document event')
    let data = await Doc.create({data:document});
    console.log(data)
    console.log( document)
  })
  
  socket.on("desconnect", () => {
    console.log("User desconnectd");
  });
});

mongoose.connect(MONGO_URL);

server.listen(PORT, () => {
  console.log("The server is listinging on the port", PORT);
});
