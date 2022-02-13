const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const {Server} = require("socket.io");
app.use(cors());

const server = http.createServer(app);

// Socket.io instance ... http server middleware
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// on == event listener
// emit == send some stuff
io.on("connection", (socket) => {
    // listening for joinRoom event
    socket.on("joinRoom", (data) => {
        socket.join(data);
        console.log(`user ${socket.id} joined room ${data}`);
    });

    //   listens for sendMessage event, then emits a new receiveMessage event
    socket.on("sendMessage", (data) => {
        socket.to(data.room).emit("receiveMessage", data);
    });

    //clean up on disconnect
    socket.on("disconnect", () => {
        console.log(`User ${socket.id} has been disconnected`);
    });
  
});

server.listen(3001, () => {
    console.log("running at :3001");
});
