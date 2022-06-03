"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)("ws://localhost:7000");
socket.emit("hello from client", { message: "supppp, from client" });
socket.on("Hello from server", (...args) => {
    console.log("message from server", args);
});
