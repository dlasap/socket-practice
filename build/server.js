"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(7000);
io.on("connection", (socket) => {
    console.log("socket initialized at port 7000");
    socket.emit("Hello from server", { message: "yo! hello from server " });
    socket.on("hello from client", (...args) => {
        console.log("hello from client ", args);
    });
    socket.on("login", (args) => {
        console.log("new login for me", args);
    });
});
